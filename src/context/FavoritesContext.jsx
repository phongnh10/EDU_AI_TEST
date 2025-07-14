import { createContext, useState, useCallback, useEffect } from "react";
import { successNotify, errorNotify } from "../components/toast/Toast";
import { appLocalStorage, STORAGE_KEYS } from "../services/AppLocalStorage";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const stored =
          (await appLocalStorage.getItem(STORAGE_KEYS.FAVORITE)) || [];
        console.log("favorites", JSON.stringify(stored, null, 2));
        setFavorites(stored);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu yêu thích:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const isFavorite = useCallback(
    (item) => favorites.some((fav) => fav._id === item._id),
    [favorites]
  );

  const addFavorite = useCallback(
    (item) => {
      if (isFavorite(item))
        return errorNotify("Sản phẩm đã có trong yêu thích.");
      const updated = [...favorites, item];
      setFavorites(updated);
      appLocalStorage.saveItem(STORAGE_KEYS.FAVORITE, updated);
      successNotify("Thêm sản phẩm yêu thích thành công.");
    },
    [favorites, isFavorite]
  );

  const removeFavorite = useCallback(
    (item) => {
      const updated = favorites.filter((fav) => fav._id !== item._id);
      setFavorites(updated);
      appLocalStorage.saveItem(STORAGE_KEYS.FAVORITE, updated);
      successNotify("Xoá sản phẩm yêu thích thành công.");
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (item) => {
      isFavorite(item) ? removeFavorite(item) : addFavorite(item);
    },
    [isFavorite, addFavorite, removeFavorite]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        loading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
