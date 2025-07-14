import { useCategories } from "../../hooks";
import { CategorySkeleton } from "../skeleton/CategoriesSkeleton";

function CategoryList() {
  const { categories, selected, setSelected, loading } = useCategories();

  if (loading) return <CategorySkeleton />;

  return (
    <div className=" overflow-x-auto">
      <div className="flex gap-2 p-2 w-max">
        {categories?.map((item) => (
          <div
            key={item._id}
            className={`
              min-w-[60px] lg:min-w-[100px]
              flex items-center gap-2
              px-2 py-1
              rounded cursor-pointer 
              hover:bg-primary
              hover:text-white
              ${
                selected === item._id
                  ? "bg-primary font-semibold text-white"
                  : ""
              }
            `}
            onClick={() => setSelected(item._id)}
          >
            <img
              src={item?.image}
              className="object-fill w-10 h-10 rounded-full p-1"
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
