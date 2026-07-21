"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    };

    console.log("FORM DATA:", formData);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setMessage(data.message);

      if (res.ok) {
        form.reset();
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-center text-4xl font-bold">
            Request a Demo
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Fill in your details and our enterprise team will contact you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
            >
              {loading ? "Submitting..." : "Request Demo"}
            </button>

            {message && (
              <p className="text-center font-medium text-green-600">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}