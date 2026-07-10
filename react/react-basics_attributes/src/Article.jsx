export function Article() {
  return (
    <article>
      <h2 className="article__title">Hello Sunshine</h2>
      <label htmlFor="Label">This is the label</label>
      <input type="text" id="uniqueID" htmlFor="Label"></input>
      <a
        className="article__link"
        href="https://koodali-sushma.github.io/rick-and-morty-app/"
      >
        A link to a vanilla JS app
      </a>
    </article>
  );
}
