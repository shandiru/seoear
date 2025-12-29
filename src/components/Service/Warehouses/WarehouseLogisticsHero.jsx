import { ArrowLeft, Warehouse } from "lucide-react";

const WarehouseLogisticsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/warehouse-workers-logistics-operations.jpg')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
          <Warehouse className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium text-blue-300">
            Warehouses &amp; Logistics
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Warehouses &amp; Logistics Centres
        </h1>

        {/* Subheading */}
        <p className="text-xl text-blue-50 max-w-3xl mb-8 text-pretty">
          Workplace Hearing Tests for Busy Logistics Operations
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center h-10 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-8 transition"
        >
          Get in Touch Today
        </button>

      </div>
    </section>
  );
};

export default WarehouseLogisticsHero;
