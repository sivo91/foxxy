



import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

// If you have a pre-typed root state and dispatch, you can use them here
export const store = configureStore({
  reducer: {
    userAuth: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;