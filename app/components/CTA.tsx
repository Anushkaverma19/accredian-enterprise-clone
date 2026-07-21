"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/10 backdrop-blur-lg p-12 text-center border border-white/20"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Ready to Transform Your Workforce?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Empower your employees with world-class learning programs and
            measurable business outcomes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
              Request Demo
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700">
              Contact Sales
              <ArrowRight size={18} />
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}