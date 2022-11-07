import React from "react";
import "../App.css";

function Button({ tag }) {
  return (
    <button>
      <span>{tag}</span>
    </button>
  );
}

export default Button;
