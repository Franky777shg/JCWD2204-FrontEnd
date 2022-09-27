import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  const handleOnChange = (e) => {
    if (e.target.name === "num1") {
      setNum1(+e.target.value);
    } else {
      setNum2(+e.target.value);
    }
  };

  const increment = () => {
    document.getElementById("result").textContent = num1 + num2;
  };
  const decrement = () => {
    document.getElementById("result").textContent = num1 - num2;
  };
  const multiplication = () => {
    document.getElementById("result").textContent = num1 * num2;
  };
  const division = () => {
    document.getElementById("result").textContent = num1 / num2;
  };
  const modulo = () => {
    document.getElementById("result").textContent = num1 % num2;
  };
  const square = () => {
    document.getElementById("result").textContent = num1 ** num2;
  };

  return (
    <div>
      <input
        type="number"
        id="number1"
        name="num1"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="number"
        id="number2"
        name="num2"
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={multiplication}>Multiplication *</button>
      <button onClick={division}>Division /</button>
      <button onClick={modulo}>Modulo %</button>
      <button onClick={square}>Square ^</button>
      <h1 id="result">Result here</h1>
    </div>
  );
}
