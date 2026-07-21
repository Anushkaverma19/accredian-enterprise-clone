"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does Accredian Enterprise help organizations?",
    answer:
      "We provide enterprise learning programs, certifications, mentoring, and analytics to help organizations upskill their workforce.",
  },
  {
    question: "Can learning programs be customized?",
    answer:
      "Yes. Programs can be tailored according to your organization's goals, employee roles, and skill requirements.",
  },
  {
    question: "Do employees receive certifications?",
    answer:
      "Yes. Learners receive industry-recognized certifications after successful completion of eligible programs.",
  },
  {
    question: "How is learner progress tracked?",
    answer:
      "Our dashboard provides real-time analytics, completion reports, engagement metrics, and performance insights.",
  },
  {
    question: "Is support available throughout the program?",
    answer:
      "Yes. Dedicated mentors and support teams assist learners throughout the learning journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600">
            Everything you need to know about our enterprise learning platform.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <p className="px-6 pb-6 leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}