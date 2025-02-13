// import Meta from "./components/Meta";

// const App = () => {
//   return (
//     <div>
//       <Meta
//         post={{
//           title: "new meta method",
//           description: "wait and see",
//           ogTitle: "og title",
//           ogDescription: "og description",
//           ogImage: "https://codeevolution.vercel.app/1.jpg",
//           twitterTitle: "twitter title",
//           twitterDescription: "twitter description",
//           twitterImage: "https://codeevolution.vercel.app/1.jpg",
//           keywords: " keywords of meta react19",
//           authorContent: "author content of react19 meta",
//         }}
//       />
//       <article>
//         <h1>new 19</h1>
//         <title>new 19</title>
//         <meta name="description" content="new 19" />
//         <meta property="og:title" content="new 19" />
//         <meta property="og:description" content="new 19 description" />
//         <meta
//           property="og:image"
//           content="https://codeevolution.vercel.app/1.jpg"
//         />
//         <meta property="og:url" content="https://codeevolution.vercel.app" />
//         <meta property="og:type" content="website" />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" ccontent="new 19" />
//         <meta name="twitter:description" content="new 19 description" />
//         <meta
//           property="twitter:domain"
//           content="https://codeevolution.vercel.app"
//         />

//         <meta
//           name="twitter:image"
//           content="https://codeevolution.vercel.app/1.jpg"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="keywords" content="new 19 keywords" />
//         <link rel="author" content="new 19 author" />
//       </article>

//       <h1>Hello, world! hi</h1>
//     </div>
//   );
// };

// export default App;import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = "React 19 New Meta";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "wait and see");

    const metaTags = [
      { name: "og:url", content: "https://codeevolution.vercel.app" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Vite + React" },
      { name: "og:description", content: "wait and see" },
      { name: "og:image", content: "https://codeevolution.vercel.app/1.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:domain", content: "codeevolution.vercel.app" },
      { name: "twitter:url", content: "https://codeevolution.vercel.app" },
      { name: "twitter:title", content: "twitter title" },
      { name: "twitter:description", content: "twitter description" },
      {
        name: "twitter:image",
        content: "https://codeevolution.vercel.app/1.jpg",
      },
      { name: "keywords", content: "keywords of meta react19" },
      { name: "author", content: "author content of react19 meta" },
    ];

    metaTags.forEach((tag) => {
      let element = document.querySelector(
        `meta[name='${tag.name}'], meta[property='${tag.name}']`
      );
      if (!element) {
        element = document.createElement("meta");
        if (tag.name.startsWith("og:") || tag.name.startsWith("twitter:")) {
          element.setAttribute("property", tag.name);
        } else {
          element.setAttribute("name", tag.name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    });
  }, []);

  return (
    <div>
      <h1>Hello, world! hi</h1>
    </div>
  );
};

export default App;
