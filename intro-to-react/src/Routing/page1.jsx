import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>Ini Page 1</h1>
      <Link to="/page2">Move to Page 2</Link>
      <Link to="/product/10">Go to product detail</Link>
    </div>
  );
};

export default Page1;
