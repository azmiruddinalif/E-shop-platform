import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./feature/cartSlice";
import counterReducer from "./feature/counterSlice";
import paginationReducer from "./feature/paginationSlice";
import viewReducer from "./feature/viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: counterReducer,
    pagination: paginationReducer,
    cart: CartReducer,
  },
});
