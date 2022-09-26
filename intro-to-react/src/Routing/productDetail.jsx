import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return <h1>Ini Product Detail untuk product dengan ID: {params.id}</h1>;
};

export default ProductDetail;
