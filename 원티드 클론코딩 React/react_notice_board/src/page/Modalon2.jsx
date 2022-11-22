import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import ModalPage from "./ModalPage";
import LogoutModal from "./LogoutModal";

const Modalon = () => {
  const SelecterModalstatus = useSelector(
    (state) => state.LOGINModalstatusOnOff.LOGINModalstatusOn
  );
  const dispatch = useDispatch();
  const [ModalPageopen, setModalPageopen] = useState(false);

  const LoginModalStatus = useSelector(
    (state) => state.LOGINModalstatusOnOff.LOGINModalstatusOn
  );
  const ShowlogoutModal = () => {
    dispatch({ type: "LOGINModal" });
    if (SelecterModalstatus) {
      dispatch({ type: "LOGINModaloff" });
    }
  };

  return (
    <li className="join">
      <a>
        <i class="fa-regular fa-bell"></i>
        <i
          onClick={ShowlogoutModal}
          id="profile"
          class="fa-solid fa-circle-user"
        ></i>
        {LoginModalStatus === true ? <LogoutModal /> : null}
      </a>
      {ModalPageopen && <ModalPage setModalPageopen={setModalPageopen} />}
    </li>
  );
};

export default Modalon;
