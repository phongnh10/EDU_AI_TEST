import axiosClient from "./axiosClient";

export const getProducts = {
  getAll: () => axiosClient.get("/product/list"),
};
