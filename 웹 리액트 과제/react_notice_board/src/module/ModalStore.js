import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

export const Login = () => ({ type: "Login" });
export const Logout = () => ({ type: "Logout" });

const initialStates = {
  naviLoginstatus: 0,
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case Logout:
      return { ...state, naviLoginstatus: 0 };
    case Login:
      return { ...state, naviLoginstatus: 1 };
    default:
      return state;
  }
};

export default reducer;
