import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SearchProducts({ onChange }) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    onChange(value);
  };

  const handleClear = () => {
    setKeyword("");
    onChange("");
  };

  return (
    <div className="relative w-full sm:w-1/2 lg:w-1/3">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={handleInputChange}
        className="w-full h-10 p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />

      {keyword && (
        <button
          onClick={handleClear}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
        >
          <IoClose size={20} />
        </button>
      )}
    </div>
  );
}
