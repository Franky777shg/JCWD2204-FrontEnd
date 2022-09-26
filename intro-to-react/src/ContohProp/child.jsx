import "./child.css";

const style = {
  button: {
    backgroundColor: "salmon",
  },
};

const Child = ({ name, age }) => {
  return (
    <div>
      <h1 id="name">Name: {name}</h1>
      <h1 className="age">Age: {age}</h1>
      <h1 style={{ color: "hotpink" }}>Contoh inline style</h1>
      <button style={style.button}>contoh internal style</button>
    </div>
  );
};

export default Child;
