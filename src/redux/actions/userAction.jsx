import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";

export default combineReducers({
  user: userReducer,
});

export const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});