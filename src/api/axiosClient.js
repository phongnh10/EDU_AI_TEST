import axios from "axios";
import { appLocalStorage, STORAGE_KEYS } from "../services/AppLocalStorage";

const baseUrl = import.meta.env.VITE_BASE_URL;
const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    try {
      const token = appLocalStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        // console.log("token:", token);
      }
    } catch (error) {
      console.error("Lỗi khi lấy token:", error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
