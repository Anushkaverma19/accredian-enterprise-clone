"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "250+",
    title: "Enterprise Clients",
  },
  {
    number: "50K+",
    title: "Learners Trained",
  },
  {
    number: "95%",
    title: "Completion Rate",
  },
  {
    number: "4.9★",
    title: "Average Rating",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Numbers That Speak For Themselves
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Thousands of professionals and hundreds of organizations trust our
            enterprise learning ecosystem.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <h3 className="text-5xl font-extrabold">
                {stat.number}
              </h3>

              <p className="mt-4 text-blue-100">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}