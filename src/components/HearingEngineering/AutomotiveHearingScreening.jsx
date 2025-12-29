export default function AutomotiveHearingScreening() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/automotive-workshop-mechanics-engineering.jpg')] bg-cover bg-center opacity-20"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center md:text-left">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-emerald-400"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
          <span className="text-sm font-medium text-emerald-400">
            Automotive &amp; Engineering
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Automotive &amp; Engineering Workshops
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8 text-pretty">
          Hearing Tests for Mechanical &amp; Engineering Workplaces
        </p>

        {/* Button */}
        <div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 focus:outline-none focus-visible:ring-3 focus-visible:ring-emerald-400">
            Request a Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}
