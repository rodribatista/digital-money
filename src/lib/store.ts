import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from "@/store/authSlice";
import {baseApi} from "@/api/baseApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
