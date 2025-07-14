import { useCallback, useEffect, useState } from "react";
import { appLocalStorage, STORAGE_KEYS } from "../services/AppLocalStorage";
import { RecentProductsContext } from "../context/recentProductsContext";

export const RecentProductsProvider = ({ children }) => {
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const addRecentProduct = useCallback(
    (item) => {
      const newItems = [
        item,
        ...recentProducts.filter((recent) => recent._id !== item._id),
      ].slice(0, 5);
      setRecentProducts(newItems);
      appLocalStorage.saveItem(STORAGE_KEYS.RECENTPRODUCTS, newItems);
      // successNotify("Thêm sản phẩm đã xem gần đây");
    },

    [recentProducts]
  );

  useEffect(() => {
    const fetchRecentProducts = async () => {
      setLoading(true);
      try {
        const res =
          (await appLocalStorage.getItem(STORAGE_KEYS.RECENTPRODUCTS)) || [];
        setRecentProducts(res);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm đã xem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentProducts();
  }, []);

  return (
    <RecentProductsContext.Provider
      value={{ recentProducts, addRecentProduct, loading }}
    >
      {children}
    </RecentProductsContext.Provider>
  );
};
