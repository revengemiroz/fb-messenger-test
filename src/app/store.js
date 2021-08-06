import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messagesSlice";

export const store = configureStore({
  reducer: {
    messages: messageReducer,
  },
});
