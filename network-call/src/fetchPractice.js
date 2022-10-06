import { useEffect, useState } from "react";

function FetchPractice() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Fetch Practice</h1>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPractice;
