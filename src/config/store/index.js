import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layoutSlice";
import { getmobilApi } from "../api/getmobil";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    [getmobilApi.reducerPath]: getmobilApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getmobilApi.middleware),
});

export default store;
