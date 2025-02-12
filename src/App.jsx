import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "My Page Title";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "This is a description of my page";
    document.head.appendChild(metaDescription);

    const ogTitle = document.createElement("meta");
    ogTitle.property = "og:title";
    ogTitle.content = "My Page Title";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.property = "og:description";
    ogDescription.content = "This is a description of my page";
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement("meta");
    ogImage.property = "og:image";
    ogImage.content = "https://codeevolution.vercel.app/1.jpg";
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement("meta");
    ogUrl.property = "og:url";
    ogUrl.content = "https://codeevolution.vercel.app";
    document.head.appendChild(ogUrl);

    const ogType = document.createElement("meta");
    ogType.property = "og:type";
    ogType.content = "website";
    document.head.appendChild(ogType);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
      document.head.removeChild(ogUrl);
      document.head.removeChild(ogType);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world! hi</h1>
    </div>
  );
};

export default App;
