import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CategorySkeleton() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-2 p-2 w-max">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="min-w-[40px] sm:min-w-[50px] lg:min-w-[100px] flex items-center gap-2 sm:px-1 sm:py-1 rounded border border-gray-300"
          >
            <Skeleton circle width={40} height={40} />
            <div className="hidden sm:block">
              <Skeleton width={60} height={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
