import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./actions/counterSlice";

function App() {
  const count = useSelector((globalState) => globalState.dataCounter.data);
  const dispatch = useDispatch();

  const onIncrementCustom = () => {
    let value = +document.getElementById("input").value;
    dispatch(incrementByAmount(value));
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" id="input" />
      <button onClick={onIncrementCustom}>Increment By Amount</button>
    </div>
  );
}

export default App;
