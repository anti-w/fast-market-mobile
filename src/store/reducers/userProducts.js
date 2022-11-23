import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userProductsSlice = createSlice({
  name: "userproducts",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = userProductsSlice.actions;

export default userProductsSlice.reducer;
