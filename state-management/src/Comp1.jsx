import { useState } from "react";
import { Comp2 } from "./Comp2";

export const Comp1 = () => {
  const [data, setData] = useState({
    num1: 0,
    num2: 1,
  });
  return (
    <div>
      <Comp2 state={data} />
    </div>
  );
};
