import axios from "axios";
import { IProduct } from "../interfaces/Product.interface";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const ProductsService = {
  async getAllProducts() {
    try {
      const { data } = await axios.get<IProduct[]>("/products");

      return data;
    } catch {
      throw Error("Failed to fetch data");
    }
  },
};
