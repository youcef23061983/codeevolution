import React from "react";

const Meta = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <meta property="og:title" content={post.ogTitle} />
      <meta property="og:description" content={post.ogDescription} />
      <meta property="og:image" content={post.ogImage} />
      <meta property="og:url" content={window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.twitterTitle} />
      <meta name="twitter:description" content={post.twitterDescription} />
      <meta name="twitter:image" content={post.twitterImage} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={post.keywords} />
      <link rel="author" content={post.authorContent} />
    </article>
  );
};

export default Meta;
