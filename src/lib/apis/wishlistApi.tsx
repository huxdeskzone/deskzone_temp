import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUsersWishlist } from "./redux/usersWishlistSlice";
import { getToken } from "../../helpers/firebase";

let baseUrl: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_DEV_API_BASE_URL || "";
} else {
  baseUrl =
    process.env.REACT_APP_PROD_API_BASE_URL ||
    "https://deskzone-backend.onrender.com/api";
}

export const wishlistApis = createApi({
  reducerPath: "wishlistApis",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getToken();
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addItemToWishList: builder.mutation({
      query: (payload) => ({
        url: "/wishlist",
        method: "POST",
        body: payload,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          await dispatch(
            wishlistApis.endpoints.getLoggedinUserWishlist.initiate(null)
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getLoggedinUserWishlist: builder.mutation({
      query: () => ({
        url: "/wishlist",
        method: "GET",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.data.length > 0) {
            dispatch(setUsersWishlist(data?.data));
          } else {
            dispatch(setUsersWishlist(null));
          }
        } catch (error: any) {
          // console.log(error);
        }
      },
    }),

    deleteItemFromWishlist: builder.mutation({
      query: (payload) => ({
        url: `/wishlist/${payload}`,
        method: "DELETE",
        body: payload,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          await dispatch(
            wishlistApis.endpoints.getLoggedinUserWishlist.initiate(null)
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useAddItemToWishListMutation,
  useGetLoggedinUserWishlistMutation,
  useDeleteItemFromWishlistMutation,
} = wishlistApis;
