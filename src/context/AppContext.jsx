import { AuthProvide } from "./AuthContext";
import { CategoriesProvider } from "./CategoriesContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProductsProvider } from "./ProductsContext";

export const AppProvider = ({ children }) => {
  return (
    <AuthProvide>
      <CategoriesProvider>
        <ProductsProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </AuthProvide>
  );
};
