import { getmobilApi } from '@Api/getmobil';
import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './slices/layoutSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    [getmobilApi.reducerPath]: getmobilApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getmobilApi.middleware),
});

export default store;
