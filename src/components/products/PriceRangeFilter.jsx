import { useState } from "react";

export default function PriceRangeFilter({ onChange }) {
  const options = [
    { label: "Lọc theo giá", value: "" },
    { label: "Dưới 50$", value: { min: null, max: 50 } },
    { label: "50$ - 100$", value: { min: 50, max: 100 } },
    { label: "Trên 100$", value: { min: 100, max: null } },
  ];

  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const rawValue = e.target.value;
    setSelected(rawValue);

    if (rawValue === "") {
      onChange({});
    } else {
      const parsed = JSON.parse(rawValue);
      onChange(parsed);
    }
  };

  return (
    <div className="bg-white rounded-sm border-1 border-gray-500 px-2">
      <select
        className="w-full h-10  "
        value={selected}
        onChange={handleChange}
      >
        {options.map((opt, idx) => (
          <option
            key={idx}
            value={
              typeof opt.value === "string" ? "" : JSON.stringify(opt.value)
            }
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
