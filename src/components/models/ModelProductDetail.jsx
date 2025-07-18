import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useFavorites } from "../../hooks/useFavorites";

export default function ModelProductDetail({ product, onClose }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const isFav = isFavorite(product || null);

  const nextImage = () => {
    setIndex((prev) => (prev < product?.image?.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : product?.image?.length - 1));
  };

  const handleCloseInside = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={handleCloseInside}
        className="relative bg-white p-8 rounded-lg shadow-lg lg:max-w-[120vh] lg:min-h-[80vh]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{product?.name}</h2>
          <button
            className="cursor-pointer"
            onClick={() => toggleFavorite(product || null)}
          >
            {isFav ? (
              <FaHeart className="text-red-600 text-xl" />
            ) : (
              <CiHeart className="text-primary hover:text-red-600 text-xl" />
            )}
          </button>
        </div>

        <div className="relative h-[300px] sm:h-[400px] flex justify-center items-center mb-6">
          <img
            src={product?.image?.[index]}
            alt={product?.name}
            className="w-full h-full object-contain rounded transition-all duration-300"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-700 hover:text-primary cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-700 hover:text-primary cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <p className="text-base font-bold text-gray-800">{product?.price}$</p>
          <div className="flex items-center gap-1 text-yellow-400">
            <span className="font-bold">{product?.rating}</span>
            <FaStar />
          </div>
        </div>

        <p
          className={`${!expanded ? "line-clamp-4" : ""} text-sm text-gray-700`}
        >
          {product?.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary underline mt-2 mb-4 cursor-pointer"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 bottom-4 md:bottom-8 sm:right-10 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 transition cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
