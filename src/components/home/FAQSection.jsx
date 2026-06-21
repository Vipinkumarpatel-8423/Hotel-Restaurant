import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do you handle?",
    answer:
      "We handle weddings, engagements, haldi, mehendi, sangeet, corporate events and complete decor planning.",
  },
  {
    question: "What's the journey with us for decor services?",
    answer:
      "We start with consultation, understand your vision, prepare concepts, finalize designs and execute everything professionally.",
  },
  {
    question: "Where do we operate?",
    answer:
      "We provide services across Uttarakhand, Delhi NCR and destination wedding locations.",
  },
  {
    question:
      "How much of a deposit is required to secure our booking?",
    answer:
      "Generally 30% to 50% advance payment is required to confirm your booking.",
  },
  {
    question:
      "What is your policy on payments and cancellations?",
    answer:
      "Payment schedules are shared before booking. Cancellation policies depend on the event timeline and vendor commitments.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f5f1] py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#111]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left py-4 cursor-pointer  "
              >
                <span className="text-lg md:text-2xl font-medium text-[#1f2937]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={28}
                  className={`transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-gray-600 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}