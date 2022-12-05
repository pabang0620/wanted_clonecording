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
      <a onClick={ShowModal}>회원가입/로그인</a>
      <p className="mediaJoin" onClick={ShowModal}>
        회원가입하기
      </p>
      {ModalPageopen && <ModalPage setModalPageopen={setModalPageopen} />}
      {/* {ModalPageopen === true ? (
        <ModalPage setModalPageopen={setModalPageopen} />
      ) : null} */}
    </li>
  );
};

export default Modalon;
