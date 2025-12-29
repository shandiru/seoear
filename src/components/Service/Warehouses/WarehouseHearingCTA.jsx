const WarehouseHearingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600">
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
            className="inline-flex items-center justify-center h-10 rounded-md bg-white text-blue-600 text-lg font-medium px-10 hover:bg-blue-50 transition"
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
