import { useState } from "react";

const industrialFaqs = [
  {
    question: "Are workshops legally required to carry out hearing tests?",
    answer:
      "Yes. Where noise exposure reaches legal action levels, hearing screening is required under workplace noise regulations.",
  },
  {
    question: "What equipment causes the most hearing risk?",
    answer:
      "Air tools, compressors, welding equipment, engine testing systems, and fabrication machinery present the highest risk.",
  },
  {
    question: "Can hearing loss affect technical work?",
    answer:
      "Yes. Reduced hearing can impact diagnostics accuracy, safety awareness, and effective communication on the workshop floor.",
  },
  {
    question: "Can tests be done during working hours?",
    answer:
      "Yes. Hearing tests are quick and designed to fit seamlessly into normal workshop operations.",
  },
  {
    question: "What happens if hearing damage is detected?",
    answer:
      "We provide clear guidance on next steps, including further assessment and recommendations for protective controls.",
  },
  {
    question: "Do you test small independent workshops?",
    answer:
      "Yes. We work with single-site independent workshops as well as large engineering and industrial facilities.",
  },
];


export default function IndustrialFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Automotive & Engineering Workshop Hearing Screening – FAQs
          </h2>

          <div className="space-y-4">
            {industrialFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-gray-200"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm sm:text-base font-medium"
                >
                  {faq.question}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 px-6 pb-4"
                      : "max-h-0 px-6"
                  }`}
                >
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
