import { HashLink } from "react-router-hash-link";

export default function BookHearingScreening() {
  const scrollWithOffset = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100; // adjust for sticky header
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Book Hearing Screening for Your Workshop
        </h2>
        <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto mb-10 text-pretty">
          Protect your team and your business with professional industrial hearing tests for automotive and engineering workshops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Make Call */}
          <a
            href="tel:+448081371961"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-10 rounded-md bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-10"
          >
            Request a Quote
          </a>

          {/* Scroll to Contact Section */}
          <HashLink
            to="/#contact"
            scroll={scrollWithOffset}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-10 rounded-md border border-white text-white hover:bg-white/10 text-lg px-10 bg-transparent"
          >
            Book a Site Visit Today
          </HashLink>
          
        </div>
      </div>
    </section>
  );
}
