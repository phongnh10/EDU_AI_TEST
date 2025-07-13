import { createContext, useEffect, useState } from "react";
import { appLocalStorage, STORAGE_KEYS } from "../services/AppLocalStorage";
import { authApi } from "../api/userApi";

export const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  const [email, setEmail] = useState("phongnguyen@gmail.com");
  const [password, setPassword] = useState("phongnguyen");

  useEffect(() => {
    const login = async () => {
      const data = { email: email, password: password };
      try {
        const res = await authApi.login(data);
        if (res) {
          appLocalStorage.saveItem(STORAGE_KEYS.ACCESS_TOKEN, res.data.token);
          console.log(
            "Đăng nhập thành công:"
            // JSON.stringify(res.data, null, 2)
          );
        }
      } catch (error) {
        console.log("Lỗi khi đăng nhập", error);
      }
    };

    login();
  }, []);

  return (
    <AuthContext.Provider value={{ email, password, setEmail, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
