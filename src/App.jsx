import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { useEffect } from "react";
import { authApi } from "./api/userApi";
import News from "./pages/News";
import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

import { appLocalStorage, STORAGE_KEYS } from "./services/AppLocalStorage";

export default function App() {
  useEffect(() => {
    const login = async () => {
      const data = { email: "phongnguyen@gmail.com", password: "phongnguyen" };
      try {
        const res = await authApi.login(data);
        if (res) {
          appLocalStorage.saveItem(STORAGE_KEYS.ACCESS_TOKEN, res.data.token);
          console.log(
            "Đăng nhập thành công:",
            JSON.stringify(res.data, null, 2)
          );
        }
      } catch (error) {
        console.log("Lỗi khi đăng nhập", error);
      }
    };

    login();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
