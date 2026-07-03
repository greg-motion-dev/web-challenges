import { getRandomColor } from "../../utils/randomColor.js";

export default function Pentagon(){
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
    });
    // hand the finished HTML element back to wherever this function was called
    return pentagon;
}