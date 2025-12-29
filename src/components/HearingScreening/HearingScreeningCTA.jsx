
import { HashLink } from "react-router-hash-link";

const HearingScreeningCTA = () => {
  // Smooth scroll function with offset for sticky navbar
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#43AA8B]">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Arrange Industrial Hearing Screening for Your Facility
        </h2>

        {/* Description */}
        <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-10 text-pretty">
          Safeguard your workforce with professional industrial hearing screening for processing plants and heavy industry.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA - Call Now */}
          <a
            href="tel:+448081371961"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
              outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
              aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
              h-10 rounded-md has-[>svg]:px-4 bg-white text-[#43AA8B] hover:bg-emerald-50 text-lg px-10"
          >
            Contact Us Today
          </a>

          {/* Secondary CTA - Scroll to Contact */}
          <HashLink
            to="/#contact"
            scroll={enhancedScroll}
            className="inline-flex items-center justify-center h-10 rounded-md border border-white bg-transparent text-white text-lg font-medium px-10 hover:bg-white/10 transition"
          >
            Discuss Tailored Programme
          </HashLink>

        </div>
      </div>
    </section>
  );
};

export default HearingScreeningCTA;
