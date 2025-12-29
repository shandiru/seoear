export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Protect Hearing. Protect Your Business.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-10 text-pretty">
          Regular industrial hearing screening is a simple step that delivers
          long-term benefits for both employees and employers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="h-12 px-8 sm:px-10 rounded-md bg-white text-emerald-600 text-base sm:text-lg font-medium transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-white/30">
            Get in Touch Today
          </button>

          <button className="h-12 px-8 sm:px-10 rounded-md border border-white text-white bg-transparent text-base sm:text-lg font-medium transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30">
            Discuss Custom Programme
          </button>
        </div>
      </div>
    </section>
  );
}
