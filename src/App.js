import "./styles.css";
import { Article } from "./Article.js";

export default function App() {
  const articles = [
    {
      id: "article1",
      comments: [],
      title: "Displaying title to add comments below"
    },
    {
      id: "article2",
      comments: ["comment test1"],
      title: "Displaying title 2 to add comments below"
    }
  ];
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </>
  );
}
