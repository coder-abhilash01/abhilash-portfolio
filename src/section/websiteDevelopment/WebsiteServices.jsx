
import {
  Code2,
  Globe,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites for shops, showrooms, restaurants, service providers, consultants, and other businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Online stores with products, categories, search, cart, orders, customer accounts, and payment integration.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Web applications built around a specific business requirement when a standard website is not enough.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panels",
    description:
      "Custom dashboards for managing products, content, blogs, enquiries, offers, and other website data.",
  },
];

const WebsiteServices = () => {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            What I Build
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Website Development Services in Kanpur
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
            A local business may need a professional website to explain its
            services and generate enquiries, while another may need an online
            store or a custom system. The website is planned around that
            requirement.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {service.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WebsiteServices;