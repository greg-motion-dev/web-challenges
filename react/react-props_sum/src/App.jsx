export default function App() {
  return (
    <div>
      <h1>Replace me with your component!</h1>
      <Sum valueA={5} valueB={10} />
      <p>hello</p>
      <Sum valueA={32847682736} valueB={120989374892} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
