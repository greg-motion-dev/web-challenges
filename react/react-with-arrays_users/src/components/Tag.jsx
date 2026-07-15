import "./Tag.css";
// import { useState } from "react";

export default function Tag({ tag }) {
  // const [isActive, setIsActive] = useState(false);

  return (
    <li className={tag === "admin" ? "tag tag--highlight" : "tag"}>{tag}</li>
  );
}
