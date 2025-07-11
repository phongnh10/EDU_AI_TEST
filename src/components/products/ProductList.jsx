import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../hooks/useFavorites";
import ModelProductDetail from "../models/ModelProductDetail";

const ProductList = ({ data }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-4 mt-4 min-h-full">
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <ItemProduct
              key={item._id}
              item={item}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              onViewDetail={() => setSelectedProduct(item)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 justify-center items-center">
          <span className="text-lg text-accent">Không có sản phẩm nào!</span>
        </div>
      )}
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
    <div className="flex-col flex-1 justify-between items-center relative cursor-pointer border-gray-200 border-1 rounded-xl lg:rounded-none lg:border-0 hover:shadow-xl hover:rounded-2xl p-4">
      <div className="flex justify-end p-4">
        <div onClick={() => toggleFavorite(item)}>
          {check ? (
            <FaHeart className="text-red-600 text-xl" />
          ) : (
            <CiHeart className="text-primary hover:text-red-600 text-xl" />
          )}
        </div>
      </div>

      <div className="flex-1">
        <img src={item.image?.[0]} alt={item.name} />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {item.name}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>

        <div className="flex flex-row items-center justify-between">
          <p className="text-accent font-bold text-base text-left">
            ${item.price}
          </p>
          <button
            className="text-sm text-primary font-medium hover:underline hover:text-accent hover:text-2xl "
            onClick={onViewDetail}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
