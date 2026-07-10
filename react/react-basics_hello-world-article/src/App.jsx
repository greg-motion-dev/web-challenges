import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am an article</h1>
      <p>I am a funky paragraph.</p>
    </article>
  );
}
