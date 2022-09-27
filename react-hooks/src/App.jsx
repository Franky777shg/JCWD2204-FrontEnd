import { useState, useEffect } from "react";
import useCounter from "./counter-hook";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [name, setName] = useState("Budi");

  // useEffect(() => {
  //   console.log("use effect triggered");
  // }, [counter]);

  // setup custom hook
  const [count, increment, decrement] = useCounter(0, 1);

  return (
    <div>
      <h1>Initial value of counter = {count}</h1>
      <button onClick={increment}>Increment 1</button>
      <button onClick={decrement}>Decrement 1</button>
      {/* <hr />
      <h1>Initial value of name = {name}</h1>
      <button onClick={() => setName("Andi")}>Change name into Andi</button> */}
    </div>
  );
}

export default App;
