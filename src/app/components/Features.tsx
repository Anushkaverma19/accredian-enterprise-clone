"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  ShieldCheck,
  Globe2,
  Award,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Mentors",
    desc: "Learn directly from industry experts with years of practical experience.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    desc: "Track learner progress and organizational growth with detailed reports.",
  },
  {
    icon: Globe2,
    title: "Global Programs",
    desc: "Access world-class learning programs designed for modern enterprises.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    desc: "Earn recognized certifications that improve employee credibility.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Enterprise-grade security with role-based access and privacy controls.",
  },
  {
    icon: Clock3,
    title: "Flexible Learning",
    desc: "Self-paced and instructor-led programs designed around your schedule.",
  },
];

export default function Features() {
  return (
    <section id="solutions" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Enterprise Features
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Everything Your Organization Needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            A complete enterprise learning ecosystem that helps organizations
            train, assess and grow high-performing teams.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}