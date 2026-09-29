
import { ArrowUpRight } from "lucide-react";

const WebsiteHero = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-neutral-950 px-6 py-24 text-white md:px-12 lg:min-h-[82vh] lg:px-20 lg:py-32">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/portfolioImgs/banner-kanpur.png"
          alt="Website development for a business in Kanpur"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-neutral-950/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative  flex min-h-[55vh] max-w-7xl items-end">

        <div className="max-w-4xl">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-300">
            Abhilash Web Studio · Kanpur
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Website Development in Kanpur for Local Businesses
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg">
            I design and develop business websites, e-commerce stores,
            and custom web applications that help local businesses
            present their services, reach customers, and grow online.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Get a Website
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View My Work
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebsiteHero;