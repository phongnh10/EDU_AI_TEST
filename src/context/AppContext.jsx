import { CategoriesProvider } from "./CategoriesContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProductsProvider } from "./ProductsContext";

export const AppProvider = ({ children }) => {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
};
