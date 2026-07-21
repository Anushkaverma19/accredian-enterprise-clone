"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">


        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Trusted by 250+ Enterprises
          </div>


          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Build a
            <span className="text-blue-600"> Future-Ready </span>
            Workforce
          </h1>


          <p className="mt-8 text-lg leading-8 text-gray-600">
            Empower your teams through industry-recognized learning,
            AI-powered skill development, certification programs and
            enterprise analytics.
          </p>



          <div className="mt-10 flex flex-wrap gap-5">


            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Request Demo
            </button>


            <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100">

              <PlayCircle size={20} />

              Watch Video

            </button>


          </div>



          <div className="mt-10 flex flex-wrap gap-6">


            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" />

              <span>
                Enterprise Ready
              </span>

            </div>



            <div className="flex items-center gap-2">

              <CheckCircle className="text-green-500" />

              <span>
                Certification Programs
              </span>

            </div>


          </div>


        </motion.div>




        {/* RIGHT IMAGE */}


        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >


          <div className="rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 p-10 shadow-2xl">


            <Image
              src="/hero/hero.jpg"
              alt="Enterprise Learning"
              width={700}
              height={500}
              className="rounded-3xl object-cover"
            />


          </div>




          {/* Floating Card 1 */}


          <div className="absolute -left-8 top-10 rounded-2xl bg-white p-5 shadow-xl">

            <h3 className="text-3xl font-bold text-blue-600">
              50K+
            </h3>

            <p className="text-gray-500">
              Learners
            </p>

          </div>




          {/* Floating Card 2 */}


          <div className="absolute -right-6 bottom-10 rounded-2xl bg-white p-5 shadow-xl">

            <h3 className="text-3xl font-bold text-blue-600">
              95%
            </h3>

            <p className="text-gray-500">
              Completion
            </p>

          </div>



        </motion.div>


      </div>

    </section>
  );
}