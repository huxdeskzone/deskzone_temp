import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../lib/apis/authApi";
import { userApi } from "../lib/apis/userApi";
import { expertApis } from "../lib/apis/expertApis";
import { serviceApis } from "../lib/apis/serviceApis";
import { wishlistApis } from "../lib/apis/wishlistApi";
import userSlice from "../lib/apis/redux/userSlice";
import userWishlistSlice from "../lib/apis/redux/usersWishlistSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [expertApis.reducerPath]: expertApis.reducer,
    [serviceApis.reducerPath]: serviceApis.reducer,
    [wishlistApis.reducerPath]: wishlistApis.reducer,
    userState: userSlice,
    userWishlistState: userWishlistSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      expertApis.middleware,
      serviceApis.middleware,
      wishlistApis.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
