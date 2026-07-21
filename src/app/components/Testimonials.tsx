"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp",
    review:
      "Accredian helped us upskill over 500 employees with measurable business impact.",
  },
  {
    name: "Michael Chen",
    role: "Learning Manager",
    company: "InnovateX",
    review:
      "Excellent learning platform with outstanding mentors and engaging curriculum.",
  },
  {
    name: "Priya Sharma",
    role: "Talent Lead",
    company: "Infosys",
    review:
      "The certification programs significantly improved employee performance and retention.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Trusted by organizations worldwide to deliver high-impact learning experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="text-blue-600" size={36} />

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold">{item.name}</h4>

                <p className="text-gray-500">
                  {item.role}
                </p>

                <span className="text-blue-600 font-medium">
                  {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}