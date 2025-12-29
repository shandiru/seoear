export default function HearingScreeningCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Arrange Industrial Hearing Screening for Your Facility
        </h2>
        <p className="text-xl md:text-2xl text-purple-50 max-w-2xl mx-auto mb-10 text-pretty">
          Safeguard your workforce with professional industrial hearing screening for processing plants and heavy industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-white text-purple-600 hover:bg-purple-50 text-lg px-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Contact Us Today
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md border border-white text-white hover:bg-white/10 bg-transparent text-lg px-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Discuss Tailored Programme
          </button>
        </div>
      </div>
    </section>
  );
}
