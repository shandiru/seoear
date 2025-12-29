import { HashLink } from "react-router-hash-link";

export default function CTASection() {
  const scrollWithOffset = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100; // adjust offset for sticky header
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#43AA8B]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Protect Hearing. Protect Your Business.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-10 text-pretty">
          Regular industrial hearing screening is a simple step that delivers
          long-term benefits for both employees and employers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Scroll to Contact Section */}
          <a
          href="tel:+448081371961"
           
            className="h-12 px-8 sm:px-10 rounded-md bg-white text-[#43AA8B] text-base sm:text-lg font-medium transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-white/30 inline-flex items-center justify-center"
          >
            Get in Touch Today
          </a>

          {/* Make Call */}
          <HashLink
             to="/#contact"
            scroll={scrollWithOffset}
            className="h-12 px-8 sm:px-10 rounded-md border border-white text-white bg-transparent text-base sm:text-lg font-medium transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30 inline-flex items-center justify-center"
          >
            Discuss Custom Programme
          </HashLink>
        </div>
      </div>
    </section>
  );
}
