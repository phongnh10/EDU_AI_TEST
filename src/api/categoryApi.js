import axiosClient from "./axiosClient";
export const getCategories = {
  getAll: () => axiosClient.get("/category/list"),
};
