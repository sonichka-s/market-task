import { ProductsService } from "../../services/Produts.srevice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("products/all", async () => {
  try {
    const response = await ProductsService.getAllProducts();
    return response;
  } catch (err) {
    console.error(err);
  }
});
