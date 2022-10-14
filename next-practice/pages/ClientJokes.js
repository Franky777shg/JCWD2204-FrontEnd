import { useState, useEffect } from "react";

const ClientJokes = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
      );
      const { jokes } = await res.json();
      setData(jokes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Here are some jokes!</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.id}. {item.setup} - {item.delivery}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientJokes;
