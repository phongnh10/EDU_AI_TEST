import axiosClient from "./axiosClient";

export const authApi = {
  login: (data) => axiosClient.post("/user/login", data),
};
