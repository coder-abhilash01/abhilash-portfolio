
import React from "react";
import { Helmet } from "react-helmet-async";

import WebsiteHero from "../section/websiteDevelopment/WebsiteHero";
import WebsiteServices from "../section/websiteDevelopment/WebsiteServices";
import WebsiteWhyHow from "../section/websiteDevelopment/WebsiteWhyHow";
import WebsiteWork from "../section/websiteDevelopment/WebsiteWork";
import WebsitePageFooter from "../section/websiteDevelopment/WebsitePageFooter";

const WebsiteDevelopmentKanpur = () => {
  return (
    <>
      <Helmet>
        <title>
          Website Developer in Kanpur | Abhilash Web Studio
        </title>

        <meta
          name="description"
          content="Abhilash Web Studio builds business websites, e-commerce stores, and custom web applications for local businesses."
        />

        <link
          rel="canonical"
          href="https://abhilashwebstudio.vercel.app/website-development-kanpur"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Website Developer in Kanpur | Abhilash Web Studio"
        />

        <meta
          property="og:description"
          content="Business websites, e-commerce stores, and custom web applications for businesses in Kanpur and across Uttar Pradesh."
        />

        <meta
          property="og:url"
          content="https://abhilashwebstudio.vercel.app/website-development-kanpur"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://abhilashwebstudio.vercel.app/og-image.png"
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Website Developer in Kanpur | Abhilash Web Studio"
        />

        <meta
          name="twitter:description"
          content="Business websites, e-commerce stores, and custom web applications for businesses in Kanpur."
        />

        <meta
          name="twitter:image"
          content="https://abhilashwebstudio.vercel.app/og-image.png"
        />
      </Helmet>

      <main className="min-h-screen bg-white text-neutral-900">
        <WebsiteHero />

        <WebsiteServices />

        <WebsiteWhyHow />

        <WebsiteWork />

        <WebsitePageFooter />
      </main>
    </>
  );
};

export default WebsiteDevelopmentKanpur;