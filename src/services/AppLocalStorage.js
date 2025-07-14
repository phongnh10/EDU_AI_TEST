const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  FAVORITE: "favorite",
  RECENTPRODUCTS: "RecentProducts",
};

const appLocalStorage = {
  saveItem: (key, value) => {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  },

  getItem: (key) => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },
};

export { STORAGE_KEYS, appLocalStorage };
