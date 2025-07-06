import Head from "next/head";

const SEO = ({ title, description, keywords, url }) => {
  const defaultTitle = "Drushti Chepte | Portfolio";
  const defaultDescription =
    "Official portfolio of Drushti Chepte — a passionate web developer and engineering student.";
  const defaultKeywords =
    "Drushti Chepte, portfolio, web developer, React, Next.js, frontend developer";
  const defaultUrl = "https://drushtichepte.me";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Drushti Chepte" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || defaultUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:image"
        content="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEO;
