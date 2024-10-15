import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { getmobilApi } from "../api/getmobil";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [getmobilApi.reducerPath]: getmobilApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getmobilApi.middleware),
});

export default store;
