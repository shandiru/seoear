import { useState } from "react";

const faqs = [
  {
    question: "Is hearing screening mandatory?",
    answer:
      "Yes, where employees are exposed to harmful noise levels. Employers must assess risk and provide health surveillance when required under The Control of Noise at Work Regulations 2005.",
  },
  {
    question: "Does the test hurt?",
    answer:
      "No. The test is completely painless and non-invasive. Employees simply wear headphones and indicate when they hear different tones.",
  },
  {
    question: "How long does it take?",
    answer:
      "Around 10–15 minutes per employee, depending on group size. We work efficiently to minimize disruption to your operations.",
  },
  {
    question: "Do employees need to prepare?",
    answer:
      "Employees should avoid loud noise exposure for several hours before the test where possible for the most accurate results.",
  },
  {
    question: "What happens if an employee fails?",
    answer:
      `A "refer" result does not mean permanent hearing loss. It indicates further assessment is recommended, usually through a full audiology evaluation.`,
  },
  {
    question: "Can tests be done on-site?",
    answer:
      "Yes. We offer on-site industrial testing, ideal for minimising downtime and disruption to your business operations.",
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
