import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, deleteToken, storeToken } from "../../helpers/firebase";
import { userApi } from "./userApi";
import { clearCurrentUser } from "./redux/userSlice";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    registerNewUSer: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    verifyUserAcount: builder.mutation({
      query: (payload) => ({
        url: "/auth/verify",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          const token = await getToken();
          if (token) {
            await dispatch(userApi.endpoints.getCurrentUser.initiate(token));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    resendVerificationToken: builder.mutation({
      query: (payload) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: payload,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: payload,
      }),
    }),

    verifyPasswordReset: builder.mutation({
      query: (payload) => ({
        url: "/auth/reset-password/verify",
        method: "POST",
        body: payload,
      }),
    }),

    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/change-password",
        method: "POST",
        body: payload,
      }),
    }),

    getNewAccessToken: builder.mutation({
      query: (payload) => ({
        url: "/auth/refresh-token",
        method: "POST",
        headers: {
          authorization: `Bearer ${payload}`,
        },
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          await storeToken(data?.data?.accessToken);
          await dispatch(
            userApi.endpoints.getCurrentUser.initiate(data?.data?.accessToken)
          );
        } catch (error) {
          await deleteToken();
        }
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      // automatically update user state if get logout user function is successful
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // await deleteToken();
          // dispatch(clearCurrentUser(null));
        } catch (error) {
          await deleteToken();
          dispatch(clearCurrentUser(null));
        }
      },
    }),
  }),
});

export const {
  useRegisterNewUSerMutation,
  useVerifyUserAcountMutation,
  useResendVerificationTokenMutation,
  useForgotPasswordMutation,
  useVerifyPasswordResetMutation,
  useUpdatePasswordMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetNewAccessTokenMutation,
} = authApi;
