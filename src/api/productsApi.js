import axiosClient from "./axiosClient";

export const productsApi = {
  getAll: () => axiosClient.get("/product/list"),
};
