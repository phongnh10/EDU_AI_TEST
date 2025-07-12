import ProductList from "../components/products/ProductList";
import CategoryList from "../components/categories/CategoryList";
import SearchBox from "../components/search/SearchProducts";
import { useCategories, useProducts } from "../hooks/AppHook";
import { useEffect, useState } from "react";
import PriceRangeFilter from "../components/products/PriceRangeFilter";

function Home() {
  const { products, filterProducts } = useProducts();
  const { selected } = useCategories();
  const [keyWord, setKeyword] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (selected) {
      filterProducts({ category: selected, name: keyWord, price: value });
    }
  }, [selected, keyWord, value]);

  return (
    <div className="flex flex-col flex-1 gap-4 my-4 ">
      <div className="flex flex-col gap-4  bg-white p-8 shadow-2xl">
        <h4 className="text-2xl font-bold">Chào mừng bạn đến với Edu AI!</h4>
      </div>

      <div className=" bg-white p-8 flex gap-4 flex-col shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <SearchBox
            onChange={(keyword) => {
              setKeyword(keyword);
            }}
          />
          <PriceRangeFilter
            onChange={(_value) => {
              setValue(_value);
            }}
          />
        </div>
        <span className="text-xl text-primary font-bold">Danh mục</span>
        <CategoryList />
      </div>

      <div className=" bg-white p-8 gap-8 shadow-2xl">
        <span className="text-xl text-primary font-bold">Sản phẩm</span>
        <ProductList data={products} />
      </div>
    </div>
  );
}

export default Home;
