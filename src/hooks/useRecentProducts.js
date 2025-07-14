import { useContext } from "react";
import { RecentProductsContext } from "../context/RecentProductsContext";

export const useRecentProducts = () => useContext(RecentProductsContext);
