import { useEffect, useState } from "react";
import Axios from "axios";

function AxiosPractice() {
  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Axios Practice</h1>
      <ul>
        {data.map((item) => (
          <li key={item.name.toString()}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosPractice;
