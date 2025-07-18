import ProductsList from "../components/products/ProductsList";
import { useFavorites } from "../hooks";

export default function Favorite() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col min-h-[70vh] my-4 bg-white p-8 shadow-2xl">
      <h4 className="text-xl text-primary font-bold mb-4">
        Danh sách sản phẩm yêu thích
      </h4>
      <ProductsList data={favorites} />
    </div>
  );
}
