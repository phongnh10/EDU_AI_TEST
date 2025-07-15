import axiosClient from "./axiosClient";

export const categoriesApi = {
  getAll: () => axiosClient.get("/category/list"),
};
