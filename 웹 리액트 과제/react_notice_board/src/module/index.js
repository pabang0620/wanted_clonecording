import { combineReducers } from "redux";
import reducer from "./ModalStore";
import bookmarkReducer from "./Bookmark";
import LOGINModalstatusOnOff from "./LogoutModal";

export const rootReducer = combineReducers({
  reducer,
  LOGINModalstatusOnOff,
});
