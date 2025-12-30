import { useState } from "react";

const faqs = [
  {
    question: "Are hearing tests mandatory in factories?",
    answer:
      "Yes. If employees are exposed to noise levels above legal action limits, employers must provide hearing surveillance under the Control of Noise at Work Regulations 2005.",
  },
  {
    question: "How often should factory workers have hearing tests?",
    answer:
      "Most manufacturing environments require annual hearing screening, with a baseline test for new starters and periodic reviews thereafter.",
  },
  {
    question: "Can tests be carried out without stopping production?",
    answer:
      "Yes. Our on-site testing is designed to work around shifts and production schedules with minimal disruption.",
  },
  {
    question: "What noise levels trigger hearing screening?",
    answer:
      "Regular exposure above 85 dB typically requires formal hearing surveillance and control measures.",
  },
  {
    question: "What happens if a worker fails the test?",
    answer:
      "A refer result means further assessment is recommended. It does not automatically indicate permanent hearing loss.",
  },
  {
    question: "Do you provide compliance reports?",
    answer:
      "Yes. Employers receive clear documentation suitable for audits, inspections, and insurance requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Factory & Manufacturing Plant Hearing Screening – FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
