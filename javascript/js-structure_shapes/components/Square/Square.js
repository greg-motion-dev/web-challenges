import { getRandomColor } from "../../utils/randomColor.js";

export default function Square(){
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
    });
  // hand the finished HTML element back to wherever this function was called
    return square;
}