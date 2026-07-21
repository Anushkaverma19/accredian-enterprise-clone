"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Customized Learning Paths",
    description:
      "Personalized learning journeys designed around business goals and employee roles.",
  },
  {
    title: "Live Mentorship",
    description:
      "Industry experts provide hands-on guidance through live sessions and mentoring.",
  },
  {
    title: "Skill Assessment",
    description:
      "Measure learning outcomes with quizzes, assignments and real-world projects.",
  },
  {
    title: "Performance Dashboard",
    description:
      "Track learner progress with detailed analytics and insights.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Enterprises Choose Us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              Build Future Ready Teams
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empower your workforce with practical, industry-relevant
              learning experiences that improve business performance.
            </p>

            <div className="mt-10 space-y-7">

              {benefits.map((item) => (

                <div
                  key={item.title}
                  className="flex gap-4"
                >

                  <CheckCircle2
                    className="mt-1 text-green-500"
                    size={28}
                  />

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

              <h3 className="text-3xl font-bold">
                Enterprise Success
              </h3>

              <p className="mt-4 text-blue-100 leading-7">
                We help organizations accelerate employee growth through
                measurable learning outcomes.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h2 className="text-4xl font-bold">
                    95%
                  </h2>

                  <p className="mt-2 text-blue-100">
                    Completion Rate
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h2 className="text-4xl font-bold">
                    250+
                  </h2>

                  <p className="mt-2 text-blue-100">
                    Enterprise Clients
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h2 className="text-4xl font-bold">
                    50K+
                  </h2>

                  <p className="mt-2 text-blue-100">
                    Learners
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h2 className="text-4xl font-bold">
                    4.9★
                  </h2>

                  <p className="mt-2 text-blue-100">
                    Client Rating
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}