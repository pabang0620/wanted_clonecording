import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialStates = {
  bookmarkstate: [],
};

const bookmarkReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "Bookmarking": // case 가 type 안의 값을 확인하기때문에 "" 이 있어야함
      return { ...state, bookmarkstate: state.bookmarkstate.concat(action.id) };
    case "offBookmarking":
    // return { ...state, bookmarkstate: false };
    default:
      return state;
  }
};

export default bookmarkReducer;
