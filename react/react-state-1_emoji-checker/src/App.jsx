import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";

  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    console.log(emoji);
    console.log(code);
    setCode(code + emoji); // code can be seen by handleClick, because it's inside App();
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setCode(""); // to reset the state to empty ("")
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
