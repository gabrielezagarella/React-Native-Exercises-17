import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import countReducer from "./countReducer";

export default combineReducers({
  bookmarkReducer,
  countReducer,
});
