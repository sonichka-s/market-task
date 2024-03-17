import { createSlice } from "@reduxjs/toolkit";
import { IAddedProduct, IProduct } from "../../interfaces/Product.interface";
import { getAllProducts } from "./Products.actions";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null as any,
    products: [] as IProduct[],
    addedProducts: [] as IAddedProduct[],
  },
  reducers: {
    addProduct(state, action) {
      const productToAdd = action.payload as IAddedProduct;
      if (
        !state.addedProducts.find(
          (item) => item.product.id === productToAdd.product.id
        )
      ) {
        state.addedProducts.push(productToAdd);
      }
    },
    removeProduct(state, action) {
      const productToRemove = action.payload as IAddedProduct;
      const productIndex = state.addedProducts.findIndex(
        (item) => item.product.id === productToRemove.product.id
      );

      state.addedProducts.splice(productIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload as IProduct[];
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.products = [];
    });
  },
});

export const productsActions = productsSlice.actions;
