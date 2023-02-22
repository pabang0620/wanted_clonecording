import React from "react";
import "../App.css";

function Nav({ tag }) {
  return (
    <li>
      <a className="nav_menu_a">{tag}</a>
    </li>
  );
}

export default Nav;
