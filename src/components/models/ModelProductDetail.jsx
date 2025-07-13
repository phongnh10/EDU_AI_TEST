import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useFavorites } from "../../hooks/useFavorites";

export default function ModelProductDetail({ product, onClose }) {
  if (!product) return null;

  const { toggleFavorite, isFavorite } = useFavorites();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const isFav = isFavorite(product);

  const nextImage = () => {
    setIndex((prev) => (prev < product.image.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : product.image.length - 1));
  };

  return (
    <div className="fixed inset-0  bg-opacity-20 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-h-[90vh] lg:max-w-[60vw] overflow-y-auto mt-12 sm:mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={() => toggleFavorite(product)}>
            {isFav ? (
              <FaHeart className="text-red-600 text-xl" />
            ) : (
              <CiHeart className="text-primary hover:text-red-600 text-xl" />
            )}
          </button>
        </div>

        <div className="relative h-[300px] sm:h-[400px] flex justify-center items-center mb-4">
          <img
            src={product.image?.[index]}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-300"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-700 hover:text-primary"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-700 hover:text-primary"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex flex-1 gap-4 items-center">
          <p className="font-bold text-base">{product.price}$</p>
          <div className="flex  justify-center items-center gap-1">
            <p className="font-bold text-base">{product.rating}</p>
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        <p className={`${!expanded && "line-clamp-4"} text-sm text-gray-700`}>
          {product.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary underline mt-2 mb-4"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>

        <button
          onClick={onClose}
          className="absolute right-4 bottom-4 md:bottom-8 sm:right-10 px-3 py-1 bg-primary text-white rounded hover:bg-opacity-80"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
