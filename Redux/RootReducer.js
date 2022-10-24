import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./Reducers/AuthReducer";

const RootReducer = combineReducers({
  userReducer: AuthReducer,
});

export default RootReducer;
