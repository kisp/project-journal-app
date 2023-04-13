import React from "react";
import "./Button.css";

export default function Button() {
  return (
    <button className="mybutton" onClick={() => alert("hi")}>
      Button
    </button>
  );
}
