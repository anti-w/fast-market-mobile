import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userProductsSlice = createSlice({
  name: "userproducts",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = userProductsSlice.actions;

export default userProductsSlice.reducer;
