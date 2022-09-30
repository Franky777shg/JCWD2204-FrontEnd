function LocalStorage() {
  const onAdd = () => {
    localStorage.setItem("username", "Budi");
  };
  const onGet = () => {
    console.log(localStorage.getItem("username"));
  };

  return (
    <div>
      <button onClick={onAdd}>Create data in local storage</button>
      <button onClick={onGet}>Get data in local storage</button>
    </div>
  );
}

export default LocalStorage;
