import { configureStore } from '@reduxjs/toolkit';
import {authApi} from "../services/authApi"
import {setupListeners} from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
