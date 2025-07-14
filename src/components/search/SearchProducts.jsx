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
    <div className="relative border-1 px-2 border-gray-500 rounded-sm w-full sm:w-1/2 lg:w-1/3">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={handleInputChange}
        className="w-full h-10 rounded-sm 
             focus:outline-none focus:ring-0 focus:border-gray-300 
             focus-visible:outline-none"
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
