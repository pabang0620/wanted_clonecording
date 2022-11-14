import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

export const Login = () => ({ type: "LOGIN" });
export const Logout = () => ({ type: "LOGOUT" });

const bookmarkstatus = {
  bookmarkstate: false,
};

const bookmarkReducer = (state = bookmarkstatus, action) => {};

export default bookmarkReducer;
