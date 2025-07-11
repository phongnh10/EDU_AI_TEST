import { useState } from "react";

export default function PriceRangeFilter({ onChange }) {
  const options = [
    { label: "Tất cả", value: "" },
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
    <div className="p-4 bg-white shadow-sm space-y-2">
      <h3 className="text-base font-semibold mb-2">Lọc theo khoảng giá</h3>
      <div className="flex flex-col gap-2 text-sm">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="price-range"
              value={
                typeof opt.value === "string" ? "" : JSON.stringify(opt.value)
              }
              checked={
                selected ===
                (typeof opt.value === "string" ? "" : JSON.stringify(opt.value))
              }
              onChange={handleChange}
              className="accent-primary"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
