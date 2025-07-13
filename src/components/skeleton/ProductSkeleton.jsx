import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(8)].map((_, idx) => (
        <div key={idx} className="p-4 shadow-md rounded-xl">
          <div className="flex justify-end mb-2">
            <Skeleton circle width={24} height={24} />
          </div>
          <Skeleton height={160} />
          <div className="mt-4 space-y-2">
            <Skeleton width="75%" />
            <Skeleton width="90%" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <Skeleton width="25%" />
            <Skeleton width={64} />
          </div>
        </div>
      ))}
    </div>
  );
}
