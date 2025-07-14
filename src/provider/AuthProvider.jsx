import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { appLocalStorage, STORAGE_KEYS } from "../services/AppLocalStorage";
import { authApi } from "../api/userApi";

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("phongnguyen@gmail.com");
  const [password, setPassword] = useState("phongnguyen");

  useEffect(() => {
    const login = async () => {
      try {
        const res = await authApi.login({ email, password });
        if (res) {
          appLocalStorage.saveItem(STORAGE_KEYS.ACCESS_TOKEN, res.data.token);
          console.log("Đăng nhập thành công");
        }
      } catch (error) {
        console.error("Lỗi khi đăng nhập", error);
      }
    };
    login();
  }, [email, password]);

  return (
    <AuthContext.Provider value={{ email, password, setEmail, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
