import { useState } from "react";

const faqs = [
  {
    question: "Is hearing screening mandatory?",
    answer:
      "Yes, hearing screening is mandatory in many industries to comply with occupational health and safety regulations.",
  },
  {
    question: "Does the test hurt?",
    answer:
      "No, the test is completely painless and non-invasive.",
  },
  {
    question: "How long does it take?",
    answer:
      "Each screening typically takes about 10–15 minutes per employee.",
  },
  {
    question: "Do employees need to prepare?",
    answer:
      "No special preparation is required. Employees should simply avoid loud noise exposure before the test.",
  },
  {
    question: "What happens if an employee fails?",
    answer:
      "If an employee does not pass, further medical evaluation and workplace recommendations will be provided.",
  },
  {
    question: "Can tests be done on-site?",
    answer:
      "Yes, screenings can be conducted directly at your workplace for convenience.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
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
