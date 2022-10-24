import React from "react";
import "./App.css";

function Nav({ tag }) {
  return (
    <li>
      <a>{tag}</a>
    </li>
  );
}

export default Nav;
