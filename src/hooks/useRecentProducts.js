import { useContext } from "react";
import { RecentProductsContext } from "../context/recentProductsContext";

export const useRecentProducts = () => useContext(RecentProductsContext);
