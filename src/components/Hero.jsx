import { Link } from "react-router-dom";
import {
  HiOutlineDownload,
  HiOutlineFolder,
  HiArrowRight,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Subtle Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-purple-200/25 blur-3xl"
      />

      {/* Main Container - Standardized max-w-7xl px-6 md:px-12 matching all sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Information & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Learning • Building • Growing</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-1.5">
              <p className="text-slate-600 font-semibold text-base sm:text-lg tracking-tight flex items-center gap-2">
                Hello, I&apos;m Majedul Haque <span className="inline-block origin-bottom-right">👋</span>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-slate-900 tracking-tight leading-[1.14]">
                Aspiring Full Stack{" "}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Web Developer
                </span>
              </h1>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              I craft clean, fast, and responsive web applications with{" "}
              <strong className="text-slate-900 font-bold">React.js</strong>,{" "}
              <strong className="text-slate-900 font-bold">JavaScript (ES6+)</strong>, and{" "}
              <strong className="text-slate-900 font-bold">Tailwind CSS</strong>. Currently learning and building modern web solutions through the Full Stack Web Engineering course.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <Link
                to="/resume"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 sm:px-6 py-3 rounded-xl font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              >
                <HiOutlineDownload className="text-lg sm:text-xl" />
                <span>View Resume / CV</span>
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-800 hover:text-blue-600 border border-slate-200 hover:border-blue-300 px-5 sm:px-6 py-3 rounded-xl font-bold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
              >
                <HiOutlineFolder className="text-lg sm:text-xl text-blue-600" />
                <span>Explore Projects</span>
                <HiArrowRight className="text-sm" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-blue-600 font-bold px-3 py-3 transition-colors text-sm sm:text-base group"
              >
                <FiSend className="text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Contact Me</span>
                <HiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Tech Stack Row */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2.5 font-mono">
                <span className="font-extrabold">&lt;/&gt;</span>
                <span>TECH STACK</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-cyan-300 transition-all">
                  <FaReact className="text-[#00d8ff] text-base" /> React.js
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-amber-300 transition-all">
                  <span className="w-4 h-4 rounded bg-[#f7df1e] text-black font-black text-[10px] flex items-center justify-center">
                    JS
                  </span>
                  JavaScript (ES6+)
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-teal-300 transition-all">
                  <SiTailwindcss className="text-[#06b6d4] text-base" /> Tailwind CSS
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-purple-300 transition-all">
                  <SiVite className="text-[#9333ea] text-base" /> Vite
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-orange-300 transition-all">
                  <FaGitAlt className="text-[#f05032] text-base" /> Git &amp; GitHub
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced, Organized Persona Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-[285px] sm:w-[335px] lg:w-[365px] h-[370px] sm:h-[420px] lg:h-[450px]">

              {/* Top-Left Blue Corner Frame Accent */}
              <div className="absolute -top-3.5 -left-3.5 sm:-top-4 sm:-left-4 w-28 sm:w-32 h-28 sm:h-32 rounded-[28px] border-[8px] sm:border-[10px] border-blue-500/85 -z-10 pointer-events-none"></div>

              {/* Bottom-Right Blue Corner Frame Accent */}
              <div className="absolute -bottom-3.5 -right-3.5 sm:-bottom-4 sm:-right-4 w-32 sm:w-36 h-24 sm:h-28 rounded-[28px] border-[8px] sm:border-[10px] border-blue-500/85 -z-10 pointer-events-none"></div>

              {/* Bottom-Left Dot Matrix */}
              <svg
                className="absolute bottom-6 -left-6 sm:-left-8 text-blue-300/80 pointer-events-none select-none -z-10"
                width="60"
                height="75"
                viewBox="0 0 60 75"
                fill="currentColor"
              >
                <circle cx="10" cy="10" r="2.5" />
                <circle cx="30" cy="10" r="2.5" />
                <circle cx="50" cy="10" r="2.5" />
                <circle cx="10" cy="30" r="2.5" />
                <circle cx="30" cy="30" r="2.5" />
                <circle cx="50" cy="30" r="2.5" />
                <circle cx="10" cy="50" r="2.5" />
                <circle cx="30" cy="50" r="2.5" />
                <circle cx="50" cy="50" r="2.5" />
                <circle cx="10" cy="70" r="2.5" />
                <circle cx="30" cy="70" r="2.5" />
                <circle cx="50" cy="70" r="2.5" />
              </svg>

              {/* Main Upright Photo Card */}
              <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-[#f3f8ff] via-[#e8f1fd] to-[#d6e7fd] border border-white/90 shadow-xl shadow-blue-500/10 overflow-hidden flex items-end justify-center">
                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-radial from-white/70 via-transparent to-blue-400/10 pointer-events-none"></div>

                {/* Persona Photo (Majedul Haque) */}
                <img
                  src="/Majedul-BG-T.png"
                  alt="Majedul Haque - Aspiring Full Stack Web Developer"
                  className="w-auto h-[400px] sm:h-[450px] lg:h-[475px] max-w-none object-contain pointer-events-auto drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Floating React Badge - Top Right */}
              {/* <div className="absolute -right-3 sm:-right-5 top-7 sm:top-8 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-2xl shadow-lg shadow-slate-900/8 border border-slate-100 flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                <FaReact className="text-[#00d8ff] text-xl sm:text-2xl" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">React.js</span>
              </div> */}

              {/* Floating "Open to Work" Badge - Bottom Right */}
              <div className="absolute -right-2 sm:-right-4 bottom-5 sm:bottom-6 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shadow-slate-900/8 border border-slate-100 flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span className="font-bold text-emerald-700 text-xs sm:text-sm tracking-wide">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
