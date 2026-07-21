import { Building2 } from "lucide-react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Trusted by Leading Companies
          </h2>

          <p className="mt-4 text-slate-600">
            Our learners are working with top companies worldwide
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-32 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <Building2 className="mb-3 h-10 w-10 text-blue-600" />
              <span className="text-lg font-semibold text-slate-800">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}