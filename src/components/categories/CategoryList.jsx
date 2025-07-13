import { useCategories } from "../../hooks/AppHook";

function CategoryList() {
  const { categories, selected, setSelected } = useCategories();

  return (
    <div className=" overflow-x-auto">
      <div className="flex gap-2 p-2  w-max">
        {categories?.map((item) => (
          <div
            key={item._id}
            className={`min-w-[40px]  sm:min-w-[50px] lg:min-w-[100px] flex items-center gap-2 sm:px-2 sm:py-1 rounded cursor-pointer transition hover:shadow-2xl ${
              selected === item._id ? "bg-primary font-semibold text-white" : ""
            }`}
            onClick={() => setSelected(item._id)}
          >
            <img
              src={item?.image}
              className="object-cover w-10 h-10 rounded-full p-2"
              alt={""}
            />
            <div className="hidden sm:block text-sm font-medium">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
