import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { useFavorites } from "../../hooks/useFavorites";
import { CiHeart } from "react-icons/ci";

export default function ModelProductDetail({ product, onClose }) {
  if (!product) return null;

  const { toggleFavorite, isFavorite } = useFavorites();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const check = isFavorite(product);

  const nextImage = () => {
    setIndex((prev) => (prev < product.image.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : product.image.length - 1));
  };

  return (
    <div className="fixed  inset-90  bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white  p-6 rounded-lg shadow-lg min-h-[90vh] w-full max-w-md">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold ">{product.name}</h2>

          <div onClick={() => toggleFavorite(product)}>
            {check ? (
              <FaHeart className="text-red-600 text-xl" />
            ) : (
              <CiHeart className="text-primary hover:text-red-600 text-xl" />
            )}
          </div>
        </div>

        <div className="h-[300px] relative flex justify-center items-center mb-4">
          <img
            src={product.image?.[index]}
            alt={product.name}
            className="w-full h-full object-contain"
          />
          <FaChevronLeft
            className="absolute cursor-pointer left-0 top-30 end-0 "
            onClick={prevImage}
          />
          <FaChevronRight
            className="absolute cursor-pointer right-0 top-30 end-0"
            onClick={nextImage}
          />
        </div>

        <p className="mb-2 font-bold">Giá: {product.price}$</p>
        <p className={`${!expanded && "line-clamp-4"}`}>
          {product.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary underline mb-4"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 absolute right-0 bottom-10 m-8"
      >
        Đóng
      </button>
    </div>
  );
}
