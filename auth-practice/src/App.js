import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NavbarComp } from "./components/NavbarComp";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  // const { id } = useSelector((state) => state.userSlice.value);
  const idLocalStorage = localStorage.getItem("id");

  const keepLogin = async () => {
    try {
      const res = await Axios.get(
        `http://localhost:2000/users/${idLocalStorage}`
      );
      dispatch(login(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
