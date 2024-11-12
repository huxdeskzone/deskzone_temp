import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../helpers/firebase";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const serviceApis = createApi({
  reducerPath: "serviceApis",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getToken();
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getServiceCategories: builder.mutation({
      query: (payload) => ({
        url: "/expert-service-category",
        method: "GET",
      }),
    }),

    getCurrencies: builder.mutation({
      query: (payload) => ({
        url: "/currencies",
        method: "GET",
      }),
    }),

    createExpertService: builder.mutation({
      query: (payload) => ({
        url: "/expert/create-service",
        method: "POST",
        body: payload,
      }),
    }),
    getAllExpertServices: builder.mutation({
      query: (payload) => ({
        url: `/expert/services?page=1&limit=20`,
        method: "GET",
      }),
    }),

    getExpertServiceById: builder.mutation({
      query: (payload) => ({
        url: `/expert/services/${payload}`,
        method: "GET",
      }),
    }),

    createServiceRequest: builder.mutation({
      query: () => ({
        url: `/expert/create-service-requests`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetServiceCategoriesMutation,
  useGetCurrenciesMutation,
  useCreateExpertServiceMutation,
  useGetAllExpertServicesMutation,
  useGetExpertServiceByIdMutation,
  useCreateServiceRequestMutation,
} = serviceApis;
