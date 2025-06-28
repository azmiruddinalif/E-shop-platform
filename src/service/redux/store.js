import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import viewReducer from "./feature/viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: counterReducer,
  },
});
