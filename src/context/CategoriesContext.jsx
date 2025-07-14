import { createContext, useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(false);

  const allOption = {
    _id: "all",
    name: "Tất cả",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg/1200px-Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg.png",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await getCategories.getAll();
        if (res) {
          setCategories([allOption, ...res.data.categories]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thể loại:", error);
      } finally {
        setLoading(false);
      }
    };
    setSelected(allOption?._id);
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, selected, setSelected, allOption, loading }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
