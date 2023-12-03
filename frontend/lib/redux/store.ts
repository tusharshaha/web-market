import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user.reducer";

// combine all reducer with root reducer
const rootReducer = combineReducers({
  auth: userReducer,
});

// create redux store
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
