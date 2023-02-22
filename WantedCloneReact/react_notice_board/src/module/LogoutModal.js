import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const LOGINModalstatus = {
  LOGINModalstatusOn: false,
};

const LOGINModalstatusOnOff = (state = LOGINModalstatus, action) => {
  switch (action.type) {
    case "LOGINModaloff": // case 가 type 안의 값을 확인하기때문에 "" 이 있어야함
      return { ...state, LOGINModalstatusOn: false };
    case "LOGINModal":
      return { ...state, LOGINModalstatusOn: true };
    default:
      return state;
  }
};

export default LOGINModalstatusOnOff;
