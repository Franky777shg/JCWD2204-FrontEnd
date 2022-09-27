import React from "react";

export default function Calculator() {
  const increment = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 + num2;
  };
  const decrement = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 - num2;
  };
  const multiplication = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 * num2;
  };
  const division = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 / num2;
  };
  const modulo = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 % num2;
  };
  const square = () => {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    document.getElementById("result").textContent = num1 ** num2;
  };

  return (
    <div>
      <input type="number" id="number1" />
      <input type="number" id="number2" />
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
