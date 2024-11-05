import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "./redux/userSlice";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.mutation({
      query: (payload) => ({
        url: "/user/logged-in-user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data?.data));
        } catch (error: any) {
          // console.log(error);
        }
      },
    }),

    serverHealthCheck: builder.mutation({
      query: () => ({
        url: "/auth/health-check",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCurrentUserMutation, useServerHealthCheckMutation } =
  userApi;
