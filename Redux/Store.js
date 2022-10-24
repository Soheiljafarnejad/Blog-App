import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
      counter: { count: state.counter.count + action.payload.counter.count },
      user: {
        userClient: state.user.userClient,
        userSsr: action.payload.user.userSsr,
      },
    };
    return nextState;
  } else {
    return RootReducer(state, action);
  }
};

export const initStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(initStore, { debug: true });
