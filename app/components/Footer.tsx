import Link from "next/link";
import { GraduationCap } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="flex items-center gap-2 text-2xl font-bold">

              <GraduationCap />

              Accredian

            </div>

            <p className="mt-5 text-gray-400 leading-7">
              Enterprise learning solutions that empower organizations
              to build future-ready teams.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <Link href="#">About</Link><br />

              <Link href="#">Programs</Link><br />

              <Link href="#">Enterprise</Link><br />

              <Link href="#">Careers</Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Resources
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <Link href="#">Blog</Link><br />

              <Link href="#">Help Center</Link><br />

              <Link href="#">Privacy Policy</Link><br />

              <Link href="#">Terms</Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-5">
<FaLinkedin
  className="cursor-pointer text-2xl hover:text-blue-400 transition"
/>

<FaInstagram
  className="cursor-pointer text-2xl hover:text-pink-400 transition"
/>

<FaGithub
  className="cursor-pointer text-2xl hover:text-gray-300 transition"
/>
            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-slate-700 pt-8 text-center text-gray-400">

          © 2026 Accredian Enterprise Clone. Built with Next.js & Tailwind CSS.

        </div>

      </div>

    </footer>
  );
}