import { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { syncData } from "../redux/cartSlice";
import { Image } from "react-bootstrap";

export const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartSlice.value);
  console.log(data);

  const getData = async () => {
    try {
      const res = await Axios.get("http://localhost:2000/cart");
      dispatch(syncData(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const CartItem = () => {
    return (
      <div
        style={{
          backgroundColor: "salmon",
          width: "85%",
          height: "200px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div></div>
        <div>2</div>
        <div>3</div>
      </div>
    );
  };

  return (
    <div style={{ height: "90vh", display: "flex" }}>
      <div className="p-5" style={{ width: "70vw" }}>
        {data.map((item, index) => {
          return (
            <div
              className="d-grid mb-3 border rounded"
              style={{
                width: "85%",
                height: "180px",
                // display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "15px",
                boxShadow: "7px 5px #888888",
              }}
            >
              <div className=" p-1">
                <Image
                  style={{ width: "250px", height: "150px" }}
                  src={item.image}
                />
              </div>
              <div className=" p-2">
                <p className="mb-0" style={{ fontSize: "30px" }}>
                  {item.name}
                </p>
                <p>Quantity: {item.qty}</p>
              </div>
              <div className=" p-2">
                <p style={{ fontSize: "30px" }}>
                  IDR {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ width: "30vw", backgroundColor: "lightblue" }}>2</div>
    </div>
  );
};
