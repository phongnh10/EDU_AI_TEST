import { AuthProvider } from "./AuthProvider";
import { CategoriesProvider } from "./CategoriesProvider";
import { FavoritesProvider } from "./FavoritesProvider";
import { ProductsProvider } from "./ProductsProvider";
import { RecentProductsProvider } from "./RecentProductsProvider";

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <FavoritesProvider>
            <RecentProductsProvider>{children}</RecentProductsProvider>
          </FavoritesProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};
