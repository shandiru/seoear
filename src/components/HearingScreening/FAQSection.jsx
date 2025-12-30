import { useState } from "react";

const faqs = [
  {
    question: "Why is hearing screening critical in industrial plants?",
    answer:
      "Continuous high-decibel machinery and long shifts significantly increase the risk of hearing damage among workers.",
  },
  {
    question: "How do you manage large workforces?",
    answer:
      "We provide structured hearing screening programmes suitable for large teams and multi-shift industrial operations.",
  },
  {
    question: "Is hearing screening a one-off requirement?",
    answer:
      "No. Ongoing monitoring is essential to track changes over time and protect long-term hearing health.",
  },
  {
    question: "Do you support compliance audits?",
    answer:
      "Yes. We provide clear documentation suitable for HSE inspections and internal compliance audits.",
  },
  {
    question: "Can hearing screening reduce employer liability?",
    answer:
      "Yes. Regular testing demonstrates duty of care and proactive risk management, helping reduce employer liability.",
  },
  {
    question: "Do you offer ongoing surveillance programmes?",
    answer:
      "Yes. We can set up scheduled hearing surveillance plans tailored specifically to your facility and workforce.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Industrial Plants & Processing Facilities Hearing Screening – FAQs
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
