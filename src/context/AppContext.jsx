import { AuthProvider } from "./AuthContext";
import { CategoriesProvider } from "./CategoriesContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProductsProvider } from "./ProductsContext";
import { RecentProductsProvider } from "./RecentProductsContext";

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <RecentProductsProvider>
            <FavoritesProvider>{children}</FavoritesProvider>
          </RecentProductsProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};
