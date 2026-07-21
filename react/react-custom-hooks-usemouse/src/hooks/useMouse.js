import { useState, useEffect } from "react";

export default function useMouse() {
  //1. set up state
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    //listen to mouse
    const handleMouse = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };

    document.body.addEventListener("mousemove", handleMouse);

    return () => {
      document.body.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  return [x, y];
}
