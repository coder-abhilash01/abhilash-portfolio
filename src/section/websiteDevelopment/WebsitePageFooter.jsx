
import { ArrowUpRight } from "lucide-react";

const WebsitePageFooter = () => {
  return (
    <>
      {/* CTA */}

      <section
        id="contact"
        className="px-6 pb-16 md:px-12 lg:px-20 lg:pb-20"
      >

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-neutral-950 px-7 py-16 text-center text-white md:px-12 md:py-20">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Need a website for your business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
            Tell me about your business and what you need. We can discuss
            the right type of website and the features required for your
            project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/917651993775"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Back to Portfolio
            </a>

          </div>

        </div>

      </section>


      {/* Local Business Footer */}

      <footer className="border-t border-neutral-200 bg-gray-50 px-6 py-10 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            {/* Business */}

            <div>

              <p className="text-lg font-semibold">
                Abhilash Web Studio
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
                Website development for businesses in Kanpur and across
                Uttar Pradesh.
              </p>

            </div>


            {/* NAP */}

            <div className="text-sm leading-7 text-neutral-600 md:text-right">

              <a
                href="tel:7651993775"
                className="block transition hover:text-neutral-900"
              >
                +91 7651993775
              </a>

              <address className="not-italic">
                Mangla Vihar 2, Shyam Nagar
                <br />
                Kanpur, Uttar Pradesh 208015
              </address>

            </div>

          </div>


          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

            <span>
              © 2026 Abhilash Web Studio
            </span>

            <a
              href="/"
              className="transition hover:text-neutral-900"
            >
              Explore Abhilash Web Studio →
            </a>

          </div>

        </div>

      </footer>
    </>
  );
};

export default WebsitePageFooter;