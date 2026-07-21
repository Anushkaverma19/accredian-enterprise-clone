"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess Learning Needs",
    description:
      "Understand your organization's skill gaps and business objectives.",
  },
  {
    icon: ClipboardCheck,
    title: "Design Learning Path",
    description:
      "Build customized learning journeys aligned with employee roles.",
  },
  {
    icon: BookOpen,
    title: "Deliver Training",
    description:
      "Provide live sessions, projects, assessments and mentorship.",
  },
  {
    icon: TrendingUp,
    title: "Measure Results",
    description:
      "Track completion, engagement and business impact with analytics.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24" id="process">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Enterprise Learning Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            A simple four-step process to transform your workforce with
            measurable learning outcomes.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}