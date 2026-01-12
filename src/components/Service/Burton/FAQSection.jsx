 
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas of Burton do you cover?",
      answer:
        "We cover Burton upon Trent, Stretton, Branston, Horninglow and nearby villages like Rolleston on Dove and Tatenhill.",
    },
    {
      question: "Do I need to prepare my ears before treatment?",
      answer:
        "Using olive oil drops for a few days can help soften the wax, but it isn’t required before your appointment.",
    },
    {
      question: "How long does the appointment take?",
      answer:
        "Most appointments last around 30 minutes, and many clients notice clearer hearing immediately after treatment.",
    },
    {
      question: "Can I have both ears treated at once?",
      answer:
        "Yes, both ears can be treated in one visit for £60 — efficient and convenient.",
    },
    {
      question: "How soon can I book?",
      answer:
        "Appointments are usually available within just a few days across Staffordshire, including Burton and surrounding areas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0D1525] font-serif">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="w-full divide-y divide-[#EAF7F3] border border-[#EAF7F3] rounded-2xl shadow-sm bg-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all ${
                openIndex === index
                  ? "bg-[#EAF7F3]/50"
                  : "hover:bg-[#F8FAFC] hover:shadow-[0_0_10px_#43AA8B11]"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#0D1525] py-5 px-4 transition-colors duration-200"
              >
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === index ? "#43AA8B" : "#4B5563"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#43AA8B]" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-6 pb-5"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Decorative Gradient Line */}
        <div className="mt-12 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-[#9C79B3]/40 via-[#43AA8B] to-[#9C79B3]/40"></div>
      </div>
    </section>
  );
}
