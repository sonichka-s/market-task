import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products/Products.slice";

export const reducers = combineReducers({
  products: productsSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;
