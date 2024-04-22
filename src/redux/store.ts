import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
