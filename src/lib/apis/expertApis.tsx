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
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    createExpert: builder.mutation({
      query: (payload) => ({
        url: "/expert/create-expert",
        method: "POST",
        body: payload.expertData,
        headers: {
          Authorization: `Bearer ${payload.accessToken}`,
        },
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
    createExpertFaq: builder.mutation({
      query: (payload) => ({
        url: "/expert/faq",
        method: "POST",
        body: payload.faqData,
        headers: {
          Authorization: `Bearer ${payload.accessToken}`,
        },
      }),
    }),
    updateSocialLinks: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "PATCH",
        body: payload.socialLinks,
        headers: {
          Authorization: `Bearer ${payload.accessToken}`,
        },
      }),
    }),
    getExpertFaqs: builder.mutation({
      query: (payload) => ({
        url: "/auth/resend-otp",
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateExpertFaqMutation,
  useGetExpertFaqsMutation,
  useUpdateSocialLinksMutation,
  useCreateExpertMutation,
} = expertApis;
