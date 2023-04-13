import React from "react";
import "./Button.scss";

export default function Button() {
  return (
    <button className="mybutton" onClick={() => alert("hi")}>
      Button
    </button>
  );
}
