export default function App() {
  function handleClick() {
    return console.log("Yey, click!");
  }
  return (
    <div>
      <Button
        color={"red"}
        disabled={false}
        text={"Click Me"}
        onClick={handleClick}
        // onClick={() => console.log("I got clicked!")}
      />
      <Button color={"yellow"} disabled={true} text={"Don't Click Me"} />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
