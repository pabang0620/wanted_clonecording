import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialStates = {
  bookmarkstate: [],
};

const bookmarkReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "Bookmarking": // case 가 type 안의 값을 확인하기때문에 "" 이 있어야함
      if (state.bookmarkstate.includes(action.id)) {
        return {
          ...state,
          bookmarkstate: state.bookmarkstate.filter((id) => id !== action.id),
        };
      } else {
        return {
          ...state,
          bookmarkstate: state.bookmarkstate.concat(action.id),
        };
      }
    // 북마크 배열에 추가
    // case "offBookmarking":

    default:
      return state;
  }
};

export default bookmarkReducer;
