import { Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NavbarComp } from "./components/NavbarComp";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
