import { Routes, Route } from "react-router-dom";

// pages
import { UsersPage } from "./pages/UsersPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CartPage } from "./pages/CartPage";

// components
import { NavbarComp } from "./components/NavbarComp";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
