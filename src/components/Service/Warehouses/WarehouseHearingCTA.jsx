const WarehouseHearingCTA = () => {
  return (
    <section className="py-20 bg-linear-to-br from-emerald-500 to-emerald-600">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Book Hearing Tests for Your Warehouse
        </h2>

        {/* Description */}
        <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-10 text-pretty">
          Ensure a safer, more compliant workplace with industrial hearing
          screening for warehouses and logistics centres.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
            aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
            h-10 rounded-md has-[>svg]:px-4 bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-10"
          >
            Get in Touch Today
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 rounded-md border border-white bg-transparent text-white text-lg font-medium px-10 hover:bg-white/10 transition"
          >
            Arrange On-Site Testing
          </button>

        </div>
      </div>
    </section>
  );
};

export default WarehouseHearingCTA;
