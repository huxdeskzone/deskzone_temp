import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../lib/apis/authApi";
import { userApi } from "../lib/apis/userApi";
import { expertApis } from "../lib/apis/expertApis";
import userSlice from "../lib/apis/redux/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [expertApis.reducerPath]: expertApis.reducer,
    userState: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      expertApis.middleware
    ),
});

setupListeners(store.dispatch);
