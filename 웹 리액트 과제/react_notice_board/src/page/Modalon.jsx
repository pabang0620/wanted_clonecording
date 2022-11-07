import React from "react";
import { useState } from "react";
import "../App.css";
import ModalPage from "./ModalPage";

const Modalon = () => {
  const [ModalPageopen, setModalPageopen] = useState(false);

  const ShowModal = () => {
    setModalPageopen(true);
  };

  return (
    <li className="join">
      <a onClick={ShowModal} href="#">
        회원가입/로그인
      </a>
      {ModalPageopen && <ModalPage setModalPageopen={setModalPageopen} />}
      {/* {ModalPageopen === true ? (
        <ModalPage setModalPageopen={setModalPageopen} />
      ) : null} */}
    </li>
  );
};

export default Modalon;
