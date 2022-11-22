import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

export const Login = () => ({ type: "LOGIN" });
export const Logout = () => ({ type: "LOGOUT" });

const initialStates = {
  naviLoginstatus: false,
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case "LOGOUT": // case 가 type 안의 값을 확인하기때문에 "" 이 있어야함
      return { ...state, naviLoginstatus: false };
    case "LOGIN":
      return { ...state, naviLoginstatus: true };
    default:
      return state;
  }
};

export default reducer;
