const ArrangeHearingScreeningCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Arrange Hearing Screening for Your Construction Site
        </h2>

        {/* Description */}
        <p className="text-xl text-amber-50 max-w-2xl mx-auto mb-10 text-pretty">
          Stay compliant and protect your team with professional on-site hearing
          tests for construction workers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 rounded-md bg-white text-amber-600 text-lg font-medium px-10 hover:bg-amber-50 transition"
          >
            Contact Us Today
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 rounded-md border border-white bg-transparent text-white text-lg font-medium px-10 hover:bg-white/10 transition"
          >
            Schedule Around Your Project
          </button>

        </div>
      </div>
    </section>
  );
};

export default ArrangeHearingScreeningCTA;
