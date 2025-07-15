import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaStar } from "react-icons/fa";
import ModelProductDetail from "../models/ModelProductDetail";
import { ProductSkeleton } from "../skeleton/ProductSkeleton";
import { useFavorites, useProducts, useRecentProducts } from "../../hooks";

const ProductsList = ({ data, isChatAI = false }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addRecentProduct } = useRecentProducts();

  if (loading) return <ProductSkeleton />;

  if (!data || (data.length === 0 && !loading))
    return (
      <div className="flex flex-1 justify-center items-center">
        <span className="text-lg text-accent">Không có sản phẩm nào!</span>
      </div>
    );

  return (
    <div className="p-4 mt-4 min-h-full">
      <div
        className={
          isChatAI
            ? "grid grid-cols-1 gap-4"
            : "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {data.map((item) => (
          <ItemProduct
            key={item._id}
            item={item}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            onViewDetail={() => {
              setSelectedProduct(item);
              addRecentProduct(item);
            }}
          />
        ))}
      </div>

      {selectedProduct && (
        <ModelProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

const ItemProduct = ({ item, isFavorite, toggleFavorite, onViewDetail }) => {
  const check = isFavorite(item);

  return (
    <div
      onClick={onViewDetail}
      className="flex-col flex-1 justify-between items-center  relative cursor-pointer border-gray-200 border-1 rounded-lg lg:border-0 hover:shadow-xl hover:rounded-lg p-4"
    >
      <div className="flex justify-end p-4">
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(item);
          }}
          className="cursor-pointer"
        >
          {check ? (
            <FaHeart className="text-red-600 text-2xl" />
          ) : (
            <CiHeart className="text-primary hover:text-red-600 text-2xl" />
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={item.image?.[0]}
          alt={item.name}
          className="h-20 w-full object-contain"
        />
      </div>

      <div className="p-4 space-y-2 flex flex-1 flex-col">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500  line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-1 gap-2 lg:gap-4 items-center">
            <p className="font-bold text-base">{item.price}$</p>
            <div className="flex  justify-center items-center gap-1">
              <p className="font-bold text-base">{item.rating}</p>
              <FaStar className="text-yellow-400" />
            </div>
          </div>

          <button
            className="text-sm text-primary font-medium hover:underline hover:text-accent"
            onClick={onViewDetail}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
