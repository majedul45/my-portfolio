import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Majedul Haque
              </h1>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                Full Stack Web Developer | MERN Stack Specialist
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Passionate about building scalable, secure, and user-centric web applications with React, Node.js, Express.js, and MongoDB.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Full Stack &amp; Frontend Roles
              </span>
              <span className="text-xs text-gray-500 mt-1">Available to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="mailto:majedulhaque45@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span className="truncate">majedulhaque45@gmail.com</span>
            </a>
            <a
              href="tel:+8801763713007"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>+880 1763 713007</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 text-base shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <a
              href="https://github.com/majedul45"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/majedul-haque-a10a45146/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </Link>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Dedicated and engineering-minded <strong>Full Stack Web Developer</strong> with hands-on expertise in the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js), JavaScript (ES6+), Tailwind CSS, and RESTful API architecture. Possesses a strong analytical foundation from a B.Sc. in Electrical &amp; Electronics Engineering, complemented by intensive training in <strong>AI-Driven Full Stack Web Engineering</strong> at Programming Hero and <strong>Cyber Security &amp; Ethical Hacking</strong> at Arena Web Security. Adept at developing modular, responsive user interfaces, implementing robust server-side business logic, and applying web application security best practices. Actively seeking a Full Stack or Frontend Web Developer position to contribute to innovative software solutions.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, Next.js (Basics), JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, DaisyUI, Bootstrap 5, React Router, Context API, Responsive Design.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Backend &amp; Databases:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js, Express.js, MongoDB (CRUD &amp; Aggregations), RESTful APIs, JSON, Firebase (Authentication &amp; Firestore), Middleware.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Tools, Platforms &amp; Security:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, Postman, npm, Chrome DevTools, Vercel, Netlify, Web Application Security &amp; Vulnerability Assessment.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, Full-Stack Integration, State Management, Clean Code Standards, Agile Methodology, Problem Solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Bazar Dor App A07 — Commodity Market Platform
                  <span className="text-xs font-normal text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                  <a
                    href="https://bazardor-app-a7.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/majedul45/bazardor-app-a7"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React, Next.js, Tailwind CSS, JavaScript (ES6+), Better Auth, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Developed a responsive web application enabling users to track and analyze daily commodity prices across Bangladesh.
                </li>
                <li>
                  Implemented dynamic price-change indicators to visually highlight rising and falling market trends.
                </li>
                <li>
                  Integrated REST APIs with structured error handling to ensure fast data loading and cross-device consistency.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  FitLog — Personal Fitness Tracking Web App
                  <span className="text-xs font-normal text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                  <a
                    href="https://fitlog-app-a06.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/majedul45/fitlog-app-a06"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), DaisyUI, Vite, React Context API, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Architected a fitness tracking application for exploring workout regimens, tracking exercises, and managing training plans.
                </li>
                <li>
                  Managed global application state using React Context API for reliable workout data persistence and instant UI updates.
                </li>
                <li>
                  Designed an engaging, mobile-first interface with dynamic card layouts and interactive user feedback.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  StackForge — Interactive Developer Stack Builder
                  <span className="text-xs font-normal text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded">
                    Productivity Tool
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                  <a
                    href="https://neon-puffpuff-874999.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/majedul45/DevStack-React-A05"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), DaisyUI, Vite, React Toastify, JSON
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Engineered an interactive tool helping developers build, customize, and manage personalized technology stacks.
                </li>
                <li>
                  Implemented robust stack selection logic with duplicate prevention, instant item removal, and real-time state synchronization.
                </li>
                <li>
                  Integrated searchable technology collections, category-based filtering, and toast notifications for optimal UX.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-4">
            {/* Degree 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-gray-900">
                    B.Sc. in Electrical &amp; Electronics Engineering (EEE)
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    European University of Bangladesh • Dhaka, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 sm:mt-0 sm:text-right">
                  <span>2020 – 2023</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Developed a strong foundation in electronic systems, circuit analysis, power systems, digital logic design, microprocessors, and embedded systems through academic study and practical laboratory work.
              </p>
            </div>

            {/* Degree 2 */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Diploma in Electrical Engineering
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    BCMC College of Engineering &amp; Technology • Jashore, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 sm:mt-0 sm:text-right">
                  <span>2015 – 2019</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Acquired theoretical and practical expertise in electrical circuits, electrical machines, industrial automation and control, digital electronics, and engineering mathematics.
              </p>
            </div>

            {/* Degree 3 */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    MM High School &amp; College • Kaliganj, Jhenaidah, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 sm:mt-0 sm:text-right">
                  <span>2014 – 2015</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Built foundational knowledge in mathematics, business principles, and Information and Communication Technology (ICT) while developing analytical and problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Professional Certifications & Training */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Certifications &amp; Professional Training
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-gray-900">
                  AI-Driven Full Stack Web Engineering
                </h4>
                <span className="text-xs font-semibold text-blue-600 shrink-0">
                  2026 (Ongoing)
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Programming Hero</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Developing full-stack web applications using React, Tailwind CSS, Node.js, Express.js, and MongoDB, with AI-assisted modern development workflows.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-gray-900">
                  Cyber Security &amp; Ethical Hacking
                </h4>
                <span className="text-xs font-semibold text-blue-600 shrink-0">
                  2026
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Arena Web Security</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Demonstrated practical knowledge in web application security, ethical hacking methodologies, vulnerability assessment, and defense principles.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Professional Soft Skills:</span>
              <p className="leading-relaxed">
                Analytical Problem Solving, Fast Learner &amp; Highly Adaptable, Collaborative Team Player, Attention to Detail, Effective Communication.
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Languages:</span>
              <p className="leading-relaxed">
                Bengali (Native), English (Professional Working Proficiency).
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
