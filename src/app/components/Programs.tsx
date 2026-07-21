import Image from "next/image";

const programs = [
  {
    title: "Data Science & AI",
    image: "/programs/data-science.jpg",
    description:
      "Master Data Science, Machine Learning and Artificial Intelligence with industry projects.",
  },

  {
    title: "Full Stack Development",
    image: "/programs/full-stack.jpg",
    description:
      "Learn modern frontend and backend technologies to build scalable applications.",
  },

  {
    title: "Digital Marketing",
    image: "/programs/digital-marketing.jpg",
    description:
      "Develop skills in SEO, marketing strategies and online growth.",
  },

  {
    title: "Product Management",
    image: "/programs/product-management.jpg",
    description:
      "Learn product strategy, analytics and management skills.",
  },
];

export default function Programs() {
  return (
    <section
      id="program"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Our Programs
          </h2>

          <p className="mt-4 text-slate-600">
            Industry-focused programs designed for career growth
          </p>

        </div>


        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {programs.map((program) => (

            <div
              key={program.title}
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-md
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={300}
                className="h-52 w-full object-cover"
              />


              <div className="p-6">

                <h3 className="text-xl font-semibold text-slate-900">
                  {program.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>


                <button
                  className="
                    mt-5
                    text-blue-600
                    font-semibold
                    hover:underline
                  "
                >
                  Learn More →
                </button>


              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}