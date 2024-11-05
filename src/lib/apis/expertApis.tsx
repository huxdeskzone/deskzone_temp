import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { getToken } from "../../helpers/firebase";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const expertApis = createApi({
  reducerPath: "expertApis",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getToken();
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createExpert: builder.mutation({
      query: (payload) => ({
        url: "/expert/create-expert",
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

    getLoggedInExperts: builder.mutation({
      query: () => ({
        url: "/expert/profile",
        method: "GET",
      }),
    }),

    createExpertFaq: builder.mutation({
      query: (payload) => ({
        url: "/expert/faq",
        method: "POST",
        body: payload,
      }),
    }),
    updateSocialLinks: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "PATCH",
        body: payload,
      }),
    }),
    getExpertFaqs: builder.mutation({
      query: () => ({
        url: "/auth/resend-otp",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateExpertFaqMutation,
  useGetExpertFaqsMutation,
  useUpdateSocialLinksMutation,
  useCreateExpertMutation,
  useGetLoggedInExpertsMutation,
} = expertApis;
