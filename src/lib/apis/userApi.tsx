import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi } from "./authApi";
import { setCurrentUser } from "./redux/userSlice";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl = process.env.REACT_APP_PROD_API_BASE_URL || "";
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getCurrentUser: builder.mutation({
      query: (payload) => ({
        url: "/user/logged-in-user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      }),
      // automatically update user state if get current user function is successful
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data?.data));
        } catch (error) {
          const refreshToken = localStorage.getItem("r_t");
          // implement a function to send request to new access token endpoint
          // if we get back expired token or error 403 status code
          if (refreshToken) {
            dispatch(
              authApi.endpoints.getNewAccessToken.initiate(refreshToken)
            );
          }
        }
      },
    }),
  }),
});

export const { useGetCurrentUserMutation } = userApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { authApi } from "./authApi";
// import { setCurrentUser } from "./redux/userSlice";
// // import { setCredentials } from "./redux/authSlice"; // Assuming you have an auth slice for managing tokens
// import { getToken } from "../../helpers/firebase";

// let baseUrl: string;

// if (process.env.NODE_ENV === "development") {
//   baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
// } else {
//   baseUrl = process.env.REACT_APP_PROD_API_BASE_URL || "";
// }

// // Create a custom baseQuery with token refresh logic
// const baseQuery = fetchBaseQuery({
//   baseUrl,
//   prepareHeaders: async (headers, { getState }) => {
//     const token = await getToken(); // Get access token from state
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// // Wrap the base query to handle 403 errors and refresh tokens
// const baseQueryWithReauth: typeof baseQuery = async (
//   args,
//   api,
//   extraOptions
// ) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     const refreshToken = localStorage.getItem("r_t");
//     if (refreshToken) {
//       // Attempt to get a new access token using the refresh token
//       const refreshResult = await api.dispatch(
//         authApi.endpoints.getNewAccessToken.initiate(refreshToken)
//       );

//       if (refreshResult.data) {
//         // Save the new token and retry the original request
//         console.log(refreshResult.data);
//         // api.dispatch(setCredentials(refreshResult.data));
//         result = await baseQuery(args, api, extraOptions);
//       } else {
//         // Handle logout or token cleanup if refresh fails
//         // api.dispatch(logout());
//       }
//     }
//   }

//   return result;
// };

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: baseQueryWithReauth,
//   endpoints: (builder) => ({
//     getCurrentUser: builder.mutation({
//       query: () => ({
//         url: "/user/logged-in-user",
//         method: "GET",
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           dispatch(setCurrentUser(data?.data));
//         } catch (error) {
//           console.error("Failed to fetch user data:", error);
//         }
//       },
//     }),
//   }),
// });

// export const { useGetCurrentUserMutation } = userApi;
