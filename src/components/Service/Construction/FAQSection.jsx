import { useState } from "react";

const constructionFaqs = [
  {
    question: "Are hearing tests required on construction sites?",
    answer:
      "Yes. Construction sites frequently exceed safe noise levels, making hearing screening a key part of health surveillance.",
  },
  {
    question: "Can hearing tests be done on active sites?",
    answer:
      "Yes. We use portable, site-safe equipment and work around site operations.",
  },
  {
    question: "How long does a test take per worker?",
    answer: "Approximately 10–15 minutes per person.",
  },
  {
    question: "Do workers need to avoid noise before testing?",
    answer:
      "Where possible, employees should avoid loud noise exposure for several hours before testing to ensure accurate results.",
  },
  {
    question: "What if PPE is already used on site?",
    answer:
      "Hearing screening remains essential even when hearing protection is in place, as it verifies effectiveness.",
  },
  {
    question: "Will results affect a worker’s job?",
    answer:
      "Results are confidential. A refer result simply guides further assessment and protective measures.",
  },
];

export default function ConstructionFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Construction Site Hearing Screening – FAQs
          </h2>

          <div className="space-y-4">
            {constructionFaqs.map((faq, index) => (
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
