import { HashLink } from "react-router-hash-link";

const WarehouseHearingCTA = () => {
  // Smooth scroll function with offset for sticky navbar
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#43AA8B",
      }}
    >
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Book Hearing Tests for Your Warehouse
        </h2>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 text-pretty">
          Ensure a safer, more compliant workplace with industrial hearing
          screening for warehouses and logistics centres.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA - Call Now */}
          <a
            href="tel:+448081371961"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap
              font-medium transition-all disabled:pointer-events-none disabled:opacity-50
              h-10 rounded-md px-10 text-lg shadow-md
              bg-white text-[#43AA8B] hover:bg-white/90"
          >
            Get in Touch Today
          </a>

          {/* Secondary CTA - Scroll to Contact */}
          <HashLink
            to="/#contact"
            scroll={enhancedScroll}
            className="inline-flex items-center justify-center h-10 rounded-md
              border border-white bg-transparent text-white text-lg font-medium
              px-10 hover:bg-white/10 transition"
          >
            Arrange On-Site Testing
          </HashLink>

        </div>
      </div>
    </section>
  );
};

export default WarehouseHearingCTA;
