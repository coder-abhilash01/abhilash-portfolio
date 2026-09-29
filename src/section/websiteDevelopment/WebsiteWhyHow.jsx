
import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Clear information about your business and services",
  "Responsive design for mobile, tablet, and desktop",
  "Easy ways for customers to contact you",
  "WhatsApp and enquiry integration when required",
  "Basic technical and on-page SEO foundations",
  "Deployment, domain connection, and launch support",
];

const process = [
  {
    number: "01",
    title: "Discuss",
    description:
      "We understand your business, customers, services, and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The pages, content structure, features, and visual direction are decided before development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The website is designed, developed, tested, and optimized for different screen sizes.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The finished website is deployed with your domain and made ready for your customers.",
  },
];

const WebsiteWhyHow = () => {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-20 md:px-12 lg:px-20 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* WHY */}

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Why Your Website Matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Turn online visitors into real enquiries.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
              When someone searches for your business, your website can give
              them the information they need before they call, message,
              visit, or buy.
            </p>

            <div className="mt-8 space-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <span className="text-sm leading-6 text-neutral-700">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* PROCESS */}

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              From the first conversation to launch.
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">

              {process.map((step) => (
                <article
                  key={step.number}
                  className="border-t border-neutral-300 pt-5"
                >

                  <span className="text-sm font-medium text-neutral-400">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {step.description}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebsiteWhyHow;