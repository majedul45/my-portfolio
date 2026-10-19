import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineChatAlt2,
  HiOutlineFolder,
  HiOutlineCode,
  HiOutlineUsers,
  HiOutlineLightningBolt,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiChevronRight,
} from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Decorative Background Elements */}
      {/* Top-Right Dot Matrix */}
      <svg
        className="absolute top-10 right-6 md:right-12 text-blue-200/70 pointer-events-none -z-10 select-none"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="currentColor"
      >
        <circle cx="15" cy="15" r="2.5" />
        <circle cx="38" cy="15" r="2.5" />
        <circle cx="61" cy="15" r="2.5" />
        <circle cx="84" cy="15" r="2.5" />
        <circle cx="15" cy="38" r="2.5" />
        <circle cx="38" cy="38" r="2.5" />
        <circle cx="61" cy="38" r="2.5" />
        <circle cx="84" cy="38" r="2.5" />
        <circle cx="15" cy="61" r="2.5" />
        <circle cx="38" cy="61" r="2.5" />
        <circle cx="61" cy="61" r="2.5" />
        <circle cx="84" cy="61" r="2.5" />
        <circle cx="15" cy="84" r="2.5" />
        <circle cx="38" cy="84" r="2.5" />
        <circle cx="61" cy="84" r="2.5" />
        <circle cx="84" cy="84" r="2.5" />
      </svg>

      {/* Bottom-Left Dot Matrix */}
      <svg
        className="absolute bottom-10 left-6 md:left-12 text-blue-200/70 pointer-events-none -z-10 select-none"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="currentColor"
      >
        <circle cx="15" cy="15" r="2.5" />
        <circle cx="38" cy="15" r="2.5" />
        <circle cx="61" cy="15" r="2.5" />
        <circle cx="84" cy="15" r="2.5" />
        <circle cx="15" cy="38" r="2.5" />
        <circle cx="38" cy="38" r="2.5" />
        <circle cx="61" cy="38" r="2.5" />
        <circle cx="84" cy="38" r="2.5" />
        <circle cx="15" cy="61" r="2.5" />
        <circle cx="38" cy="61" r="2.5" />
        <circle cx="61" cy="61" r="2.5" />
        <circle cx="84" cy="61" r="2.5" />
        <circle cx="15" cy="84" r="2.5" />
        <circle cx="38" cy="84" r="2.5" />
        <circle cx="61" cy="84" r="2.5" />
        <circle cx="84" cy="84" r="2.5" />
      </svg>

      {/* Ambient Corner Glows */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineUser className="text-blue-600 text-sm" />
          <span>ABOUT ME</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Who I{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Am
          </span>
        </h2>

        <p className="text-slate-500 font-medium text-sm sm:text-base max-w-xl mx-auto">
          A glimpse into my journey, core values, and dedication as a passionate fresher web developer.
        </p>
      </div>

      {/* Main Grid: 12 Columns - Equal Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Developer Profile Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/40 flex flex-col justify-between h-full space-y-5">
            
            {/* Upper Content Group */}
            <div className="space-y-5">
              {/* Top Area: Avatar + "Open to Work" + Handwritten Note */}
            <div className="flex items-start justify-between gap-3">
              {/* Avatar Squircle */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-blue-100 via-sky-50 to-indigo-100 overflow-hidden shrink-0 flex items-end justify-center border-2 border-white shadow-md">
                <img
                  src="/Majedul-BG-T.png"
                  alt="Majedul Haque"
                  className="w-auto h-[115%] max-w-none object-contain object-bottom drop-shadow transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right of Avatar: Badge & Handwritten "Let's Build Something Great" */}
              <div className="flex-1 flex flex-col justify-between items-end pl-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open to Work</span>
                </div>

                <div className="relative pt-2 text-right pointer-events-none select-none">
                  {/* Dot Accent Matrix */}
                  <div className="absolute right-0 top-1 grid grid-cols-4 gap-1 opacity-30 -z-10">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i} className="w-1 h-1 rounded-full bg-blue-400" />
                    ))}
                  </div>

                  <span className="font-handwriting text-blue-600 text-xl font-bold block leading-tight -rotate-6">
                    Let&apos;s Build<br />Something<br />Great
                  </span>

                  {/* Hand-drawn arrow pointing towards the photo */}
                  <svg
                    className="w-8 h-8 text-blue-600 ml-auto mr-3 -mt-1 -rotate-12"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 30,6 C 24,18 16,26 8,26" />
                    <path d="M 16,20 L 8,26 L 16,32" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Profile Name & Title */}
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Majedul Haque
              </h3>
              <p className="text-sm font-semibold text-blue-600 mt-0.5">
                Fresher Web Developer
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                <HiOutlineLocationMarker className="text-blue-500 text-sm" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              {/* Availability */}
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <HiOutlineCalendar className="text-blue-600 text-base" />
                  <span>Availability</span>
                </span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full text-xs">
                  Immediate Joining
                </span>
              </div>

              {/* Primary Focus */}
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <FiTarget className="text-blue-600 text-base" />
                  <span>Primary Focus</span>
                </span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  React &amp; Modern Frontend
                </span>
              </div>

              {/* Communication */}
              <div className="flex items-center justify-between py-1.5">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <HiOutlineChatAlt2 className="text-blue-600 text-base" />
                  <span>Communication</span>
                </span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  English &amp; Bengali
                </span>
              </div>
            </div>
            </div>

            {/* Micro Stats (Bottom of Left Card - Pinned to bottom) */}
            <div className="bg-slate-50/90 rounded-2xl p-4 mt-auto border border-slate-100 grid grid-cols-3 gap-2 text-center">
              <div>
                <HiOutlineFolder className="text-blue-600 text-xl mx-auto mb-1" />
                <span className="block text-xl font-black text-blue-600">3+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block mt-0.5">
                  Demo Projects
                </span>
              </div>
              <div>
                <HiOutlineCode className="text-blue-600 text-xl mx-auto mb-1" />
                <span className="block text-xl font-black text-blue-600">500+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block mt-0.5">
                  Coding Hours
                </span>
              </div>
              <div>
                <HiOutlineUsers className="text-purple-600 text-xl mx-auto mb-1" />
                <span className="block text-xl font-black text-purple-600">100%</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block mt-0.5">
                  Commitment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, Strengths Grid & CTAs (7 cols) - Equal Height */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6 text-left">
          
          {/* Upper Group: Headline, Paragraphs, Strengths Grid */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-snug">
              Turning complex design ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                seamless,
              </span>{" "}
              <span className="text-blue-600">interactive</span> web experiences.
            </h3>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                I am an aspiring and self-driven <strong className="text-slate-900 font-bold">Fresher Web Developer</strong> with a solid academic foundation in Computer Science and an intense passion for modern frontend technologies. My journey began with experimenting with basic HTML &amp; CSS, which quickly evolved into building dynamic, full-fledged Single Page Applications with <strong className="text-slate-900 font-bold">React.js</strong> and <strong className="text-slate-900 font-bold">Tailwind CSS</strong>.
              </p>
              <p>
                As a fresher, I bring raw enthusiasm, fresh perspective, and a relentless drive to master modern tools. I place high value on writing clean, accessible, and maintainable code. I am eager to contribute to collaborative engineering teams where I can learn from senior developers and deliver immediate value.
              </p>
            </div>

            {/* 4 Strengths / Feature Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Card 1: Clean & Maintainable Code */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 font-mono font-bold text-lg group-hover:scale-105 transition-transform">
                  &lt;/&gt;
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Clean &amp; Maintainable Code
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Writing component-driven, reusable code adhering to modern best practices.
                  </p>
                </div>
              </div>

              {/* Card 2: Fast Learner & Adaptable */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                  <HiOutlineLightningBolt />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Fast Learner &amp; Adaptable
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Quick to pick up new libraries, frameworks, and engineering workflows.
                  </p>
                </div>
              </div>

              {/* Card 3: Responsive & Pixel-Perfect */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                  <HiOutlineDatabase />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Responsive &amp; Pixel-Perfect
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Obsessed with creating fluid layouts that work flawlessly on all devices.
                  </p>
                </div>
              </div>

              {/* Card 4: Problem Solver */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                  <HiOutlineLightBulb />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Problem Solver
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Passionate about debugging, analytical thinking, and optimizing UX.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: Pinned to bottom of the right column */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <HiOutlineDocumentText className="text-lg" />
              <span>Inspect Full Resume</span>
              <HiChevronRight className="text-base" />
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-800 hover:text-blue-600 border border-slate-200 hover:border-blue-300 px-6 py-3.5 rounded-xl font-bold text-sm shadow-xs hover:shadow-md transition-all hover:bg-blue-50/30"
            >
              <FaPaperPlane className="text-blue-600 text-sm" />
              <span>Let&apos;s Work Together</span>
              <HiChevronRight className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
