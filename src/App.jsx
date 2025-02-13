import Meta from "./components/Meta";

const App = () => {
  return (
    <div>
      <Meta
        post={{
          title: "new meta method",
          description: "wait and see",
          ogTitle: "og title",
          ogDescription: "og description",
          ogImage: "https://codeevolution.vercel.app/1.jpg",
          twitterTitle: "twitter title",
          twitterDescription: "twitter description",
          twitterImage: "https://codeevolution.vercel.app/1.jpg",
          keywords: " keywords of meta react19",
          authorContent: "author content of react19 meta",
        }}
      />

      <h1>Hello, world! hi</h1>
    </div>
  );
};

export default App;
