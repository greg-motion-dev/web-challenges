import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hello</Button>
      <Button>Click me</Button>
      <Button>Here comes Johnny!</Button>
      <Button>Eat me</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
