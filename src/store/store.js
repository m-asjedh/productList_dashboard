import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import searchReducer from "./reducers/searchSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
  },
});

export default store;
