import {
  Reducer,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface RootState {}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers({});

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.getState;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
