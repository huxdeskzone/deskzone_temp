import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: null,
};

export const userWishlistSlice = createSlice({
  initialState,
  name: "userWishlistState",
  reducers: {
    setUsersWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export default userWishlistSlice.reducer;

export const { setUsersWishlist } = userWishlistSlice.actions;
