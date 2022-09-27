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

  let result = document.getElementById("result");

  const operation = (sign) => {
    if (sign === "+") {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 + num2}`;
    } else if (sign === "-") {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 - num2}`;
    } else if (sign === "*") {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 * num2}`;
    } else if (sign === "/") {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 / num2}`;
    } else if (sign === "%") {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 % num2}`;
    } else {
      result.textContent = `${num1} ${sign} ${num2} = ${num1 ** num2}`;
    }
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
      <button onClick={() => operation("+")}>Increment +</button>
      <button onClick={() => operation("-")}>Decrement -</button>
      <button onClick={() => operation("*")}>Multiplication *</button>
      <button onClick={() => operation("/")}>Division /</button>
      <button onClick={() => operation("%")}>Modulo %</button>
      <button onClick={() => operation("^")}>Square ^</button>
      <h1 id="result">Result here</h1>
    </div>
  );
}
