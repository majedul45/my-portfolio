const fs = require('fs');
const zlib = require('zlib');

// CRC Table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(chunk.slice(4, 8 + len)), 8 + len);
  return chunk;
}

function encodeRGBAtoPNG(width, height, rgbaBuffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  const stride = 1 + width * 4;
  const raw = Buffer.alloc(height * stride);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0;
    rgbaBuffer.copy(raw, y * stride + 1, y * width * 4, (y + 1) * width * 4);
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function decodePngRGB(buffer) {
  let pos = 8;
  const chunks = [];
  let width = 0, height = 0;
  while (pos < buffer.length) {
    const len = buffer.readUInt32BE(pos);
    const type = buffer.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(pos + 8);
      height = buffer.readUInt32BE(pos + 12);
    } else if (type === 'IDAT') {
      chunks.push(buffer.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(chunks));
  const bpp = 3;
  const stride = 1 + width * bpp;
  const rgb = Buffer.alloc(width * height * 3);

  function paeth(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  }

  for (let y = 0; y < height; y++) {
    const filter = raw[y * stride];
    const lineStart = y * stride + 1;
    const destLineStart = y * width * 3;

    for (let x = 0; x < width * 3; x++) {
      const rawByte = raw[lineStart + x];
      const left = x >= bpp ? rgb[destLineStart + x - bpp] : 0;
      const up = y > 0 ? rgb[(y - 1) * width * 3 + x] : 0;
      const upLeft = (y > 0 && x >= bpp) ? rgb[(y - 1) * width * 3 + x - bpp] : 0;

      let val = 0;
      if (filter === 0) val = rawByte;
      else if (filter === 1) val = (rawByte + left) & 0xff;
      else if (filter === 2) val = (rawByte + up) & 0xff;
      else if (filter === 3) val = (rawByte + Math.floor((left + up) / 2)) & 0xff;
      else if (filter === 4) val = (rawByte + paeth(left, up, upLeft)) & 0xff;

      rgb[destLineStart + x] = val;
    }
  }
  return { width, height, rgb };
}

console.log('Reading public/monogram-name.png...');
const { width, height, rgb } = decodePngRGB(fs.readFileSync('public/monogram-name.png'));

// Extract stroke mask (alpha 0..1)
const strokeAlpha = new Float32Array(width * height);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 3;
    const r = rgb[i];
    let a = (253 - r) / 235;
    if (a < 0.05) a = 0;
    else a = Math.min(1, Math.pow((a - 0.05) / 0.95, 0.85));
    strokeAlpha[y * width + x] = a;
  }
}

// Bounding box of monogram strokes
const minX = 51, maxX = 1483, minY = 269, maxY = 838;
const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;

// Function to generate canvas of size S x S
function generateIcon(S, radiusRatio = 0.22, paddingRatio = 0.08) {
  const buf = Buffer.alloc(S * S * 4);
  const bgR = 0x19, bgG = 0x46, bgB = 0xE6; // #1946E6
  const cornerR = S * radiusRatio;

  // Squircle rounded corners
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const qx = Math.max(0, Math.abs(x - S / 2) - (S / 2 - cornerR));
      const qy = Math.max(0, Math.abs(y - S / 2) - (S / 2 - cornerR));
      const dist = Math.sqrt(qx * qx + qy * qy) - cornerR;
      const bgAlpha = Math.min(1, Math.max(0, 0.5 - dist));

      const idx = (y * S + x) * 4;
      buf[idx] = bgR;
      buf[idx + 1] = bgG;
      buf[idx + 2] = bgB;
      buf[idx + 3] = Math.round(bgAlpha * 255);
    }
  }

  const targetW = S * (1 - paddingRatio * 2);
  const scale = targetW / cropW;
  const targetH = cropH * scale;
  const offX = (S - targetW) / 2;
  const offY = (S - targetH) / 2;

  // Multi-sampling for ultra smooth anti-aliased strokes
  const ss = S <= 64 ? 4 : 2;
  for (let ty = 0; ty < targetH; ty++) {
    const py = Math.floor(offY + ty);
    if (py < 0 || py >= S) continue;

    for (let tx = 0; tx < targetW; tx++) {
      const px = Math.floor(offX + tx);
      if (px < 0 || px >= S) continue;

      let totalA = 0;
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const srcX = minX + ((tx + (sx + 0.5) / ss) / targetW) * cropW;
          const srcY = minY + ((ty + (sy + 0.5) / ss) / targetH) * cropH;

          const x0 = Math.floor(srcX);
          const x1 = Math.min(width - 1, x0 + 1);
          const y0 = Math.floor(srcY);
          const y1 = Math.min(height - 1, y0 + 1);
          const fx = srcX - x0;
          const fy = srcY - y0;

          const a00 = strokeAlpha[y0 * width + x0];
          const a10 = strokeAlpha[y0 * width + x1];
          const a01 = strokeAlpha[y1 * width + x0];
          const a11 = strokeAlpha[y1 * width + x1];
          totalA += (a00 * (1 - fx) + a10 * fx) * (1 - fy) + (a01 * (1 - fx) + a11 * fx) * fy;
        }
      }
      let a = totalA / (ss * ss);
      if (S <= 32) a = Math.min(1, a * 1.35);

      if (a > 0) {
        const idx = (py * S + px) * 4;
        const currentA = buf[idx + 3] / 255;
        const fgR = 255, fgG = 255, fgB = 255;
        const outA = a + currentA * (1 - a);
        if (outA > 0) {
          buf[idx] = Math.round((fgR * a + buf[idx] * currentA * (1 - a)) / outA);
          buf[idx + 1] = Math.round((fgG * a + buf[idx + 1] * currentA * (1 - a)) / outA);
          buf[idx + 2] = Math.round((fgB * a + buf[idx + 2] * currentA * (1 - a)) / outA);
          buf[idx + 3] = Math.round(outA * 255);
        }
      }
    }
  }

  return encodeRGBAtoPNG(S, S, buf);
}

// Generate all standard favicon and app icon sizes
console.log('Generating 512x512 icon...');
const png512 = generateIcon(512, 0.22, 0.08);
fs.writeFileSync('public/monogram-icon.png', png512);
fs.writeFileSync('public/favicon.png', png512);

console.log('Generating apple-touch-icon.png (180x180)...');
fs.writeFileSync('public/apple-touch-icon.png', generateIcon(180, 0.22, 0.08));

console.log('Generating favicon-32x32.png...');
fs.writeFileSync('public/favicon-32x32.png', generateIcon(32, 0.22, 0.07));

console.log('Generating favicon-16x16.png...');
fs.writeFileSync('public/favicon-16x16.png', generateIcon(16, 0.22, 0.06));

// Generate SVG favicon with #1946E6 squircle
const iconBase64 = png512.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <clipPath id="squircle">
      <rect width="512" height="512" rx="112" ry="112"/>
    </clipPath>
  </defs>
  <rect width="512" height="512" rx="112" ry="112" fill="#1946E6"/>
  <image href="data:image/png;base64,${iconBase64}" width="512" height="512" clip-path="url(#squircle)"/>
</svg>
`;
fs.writeFileSync('public/favicon.svg', svg);

console.log('All icons generated successfully!');
