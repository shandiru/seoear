import { useState } from "react";

const warehouseFaqs = [
  {
    question: "Are warehouses considered noisy workplaces?",
    answer:
      "Yes. Forklifts, alarms, conveyors, and loading operations can exceed safe noise levels over time.",
  },
  {
    question: "Is hearing screening required for forklift drivers?",
    answer:
      "Yes. Clear hearing is critical for safety, communication, and alarm awareness.",
  },
  {
    question: "Can tests be completed across multiple shifts?",
    answer:
      "Absolutely. We can schedule testing to suit day, night, or rotating shifts.",
  },
  {
    question: "How are employee results handled?",
    answer:
      "Results are kept confidential, with employers receiving compliance summaries only.",
  },
  {
    question: "How often should warehouse staff be tested?",
    answer:
      "Typically annually, depending on noise risk assessments.",
  },
  {
    question: "Do you test temporary or agency staff?",
    answer:
      "Yes. We can include permanent, temporary, and agency workers as required.",
  },
];

export default function WarehouseFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Warehouse & Logistics Centre Hearing Screening – FAQs
          </h2>

          <div className="space-y-4">
            {warehouseFaqs.map((faq, index) => (
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
