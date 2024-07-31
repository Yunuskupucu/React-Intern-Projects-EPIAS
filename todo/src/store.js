import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./pages/todo/reducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
