import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const baseUrl = "https://icaabc.com/";

  const metaInfo = {
    "/": {
      title: "ICAABC | Home",
      description:
        "Welcome to ICAABC – International Conference on Advances in AI, Business Analytics, and Cloud Systems. A global platform for researchers, academicians, and industry professionals.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/about": {
      title: "ICAABC | About the Conference",
      description:
        "Learn about ICAABC – its mission, vision, and contributions to the fields of AI, Business Analytics, and Cloud Systems.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/scope": {
      title: "ICAABC | Scope of Conference",
      description:
        "Explore the wide range of topics covered under ICAABC – International Conference on Advances in AI, Business Analytics, and Cloud Systems.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/organize": {
      title: "ICAABC | Organizing Committee",
      description:
        "Meet the dedicated team organizing the ICAABC – International Conference on Advances in AI, Business Analytics, and Cloud Systems.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/editorial": {
      title: "ICAABC | Editorial Board",
      description:
        "View the esteemed editorial board behind ICAABC – curating high-quality academic content in AI, Business Analytics, and Cloud Systems.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/keydates": {
      title: "ICAABC | Important Dates",
      description:
        "Stay informed on submission deadlines, notification dates, and event schedules for ICAABC.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/registration": {
      title: "ICAABC | Registration Details",
      description:
        "Get information on registration fees, categories, and process for attending ICAABC.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/papersub": {
      title: "ICAABC | Paper Submission",
      description:
        "Submit your research paper to ICAABC – a platform for innovative work in AI, Business Analytics, and Cloud Systems.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/contact": {
      title: "ICAABC | Contact Us",
      description:
        "Have questions? Reach out to the ICAABC organizing committee for support and queries.",
      image: `${baseUrl}/img/favicon.png`,
    },
  };

  const currentPath = Object.keys(metaInfo).includes(location.pathname)
    ? location.pathname
    : "/";

  const { title, description, image } = metaInfo[currentPath];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
};

export default MetaTags;