import React from "react";

export default function Button() {
  return (
    <button
      onClick={() => alert("hi")}
      style={{
        color: "var(--color-foam)",
        backgroundColor: "var(--color-nemo)",
      }}
    >
      Button
    </button>
  );
}
