import React from "react";
import "./LogoutModal.css";
import { useDispatch, useSelector } from "react-redux";

const LogoutModal = () => {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch({ type: "LOGINModaloff" });
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <div>
        <div>
          <div className="mnThing"></div>
          <ul className="LogoutModal">
            <li id="margintopmodal">MY 원티드</li>
            <li>프로필</li>
            <li id="LogoutModalLine"></li>
            <li>지원현황</li>
            <li>제안받기 현황</li>
            <li>좋아요</li>
            <li>북마크</li>
            <li id="LogoutModalLine"></li>
            <li>추천</li>
            <li>포인트</li>
            <li onClick={Logout} className="graycolor">
              로그아웃
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
