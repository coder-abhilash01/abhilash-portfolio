
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UrbanVibe",
    description: "Full-stack e-commerce platform",
    image: "/projects/project1.jpeg",
    url: "https://urbanvibeshopping.vercel.app/",
    alt: "UrbanVibe e-commerce website",
  },
  {
    title: "TA Sign",
    description: "Business website and content platform",
    image: "/projects/project3.jpeg",
    url: "https://www.tasign.in/",
    alt: "TA Sign business website",
  },
  {
    title: "Drishya",
    description: "Website monitoring platform",
    image: "/projects/project4.jpeg",
    url: "https://drishya-theta.vercel.app/",
    alt: "Drishya website monitoring application",
  },
];

const WebsiteWork = () => {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              See examples of websites and applications I have built.
            </h2>

          </div>

          <a
            href="/#projects"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-neutral-900"
          >
            View Full Portfolio
            <ArrowUpRight size={17} />
          </a>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl bg-neutral-100"
            >

              <img
                src={project.image}
                alt={project.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="border border-t-0 border-neutral-200 bg-white p-5">

                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {project.description}
                </p>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WebsiteWork;