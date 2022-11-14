import React from "react";
import { useState } from "react";
import "../App.css";
import ModalPage from "./ModalPage";

const Modalon = () => {
  const [ModalPageopen, setModalPageopen] = useState(false);

  return (
    <li className="join">
      <a>
        <i class="fa-regular fa-bell"></i>
        <i id="profile" class="fa-regular fa-user"></i>
      </a>
      {ModalPageopen && <ModalPage setModalPageopen={setModalPageopen} />}
    </li>
  );
};

export default Modalon;
