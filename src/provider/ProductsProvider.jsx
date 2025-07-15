import { useCallback, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { productsApi } from "../api/productsApi";
import { useAuth } from "../hooks/useAuth";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await productsApi.getAll();
        if (res) {
          setOriginalProducts(res?.data?.data);
          setProducts(res?.data?.data);
        }
      } catch (error) {
        console.log("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  const filterProducts = useCallback(
    (filters = {}) => {
      const { name, price = {}, category } = filters;
      const { min, max } = price;

      const filtered = originalProducts.filter((item) => {
        const matchName = name
          ? item.name.toLowerCase().includes(name.toLowerCase())
          : true;

        const matchPrice =
          (min !== undefined ? item.price >= min : true) &&
          (max !== undefined ? item.price <= max : true);

        const matchCategory =
          !category || category === "all"
            ? true
            : item.categoryId._id === category;

        return matchName && matchPrice && matchCategory;
      });

      setProducts(filtered);
    },
    [originalProducts]
  );

  const resetFilter = useCallback(() => {
    setProducts(originalProducts);
  }, [originalProducts]);

  return (
    <ProductsContext.Provider
      value={{ products, filterProducts, resetFilter, loading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
