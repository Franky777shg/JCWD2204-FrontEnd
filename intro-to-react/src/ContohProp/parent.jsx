import Child from "./child";

const Parent = () => {
  return (
    <div>
      <h1>This is Parent component</h1>
      <Child name="Budi" age={31} />
    </div>
  );
};

export default Parent;
