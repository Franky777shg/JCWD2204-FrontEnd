import { Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import ProductDetail from "./productDetail";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Routing;
