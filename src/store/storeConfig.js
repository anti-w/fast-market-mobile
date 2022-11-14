import { configureStore } from "@reduxjs/toolkit";
import userProducts from "./reducers/userProducts";

export default configureStore({
  reducer: {
    userProducts: userProducts,
  },
});
