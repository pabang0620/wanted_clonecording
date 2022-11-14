import { combineReducers } from "redux";
import reducer from "./ModalStore";
import bookmarkReducer from "./Bookmark";

export const rootReducer = combineReducers({
  reducer,
  bookmarkReducer,
});
