import axiosClient from "./axiosClient";

export const aiApi = {
  getSuggestions: (prompt) => axiosClient.post("/ai/suggestions", { prompt }),
};
