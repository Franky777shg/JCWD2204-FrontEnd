import { useEffect } from "react";
import Axios from "axios";
const url = "http://localhost:2000/users/";

const JsonServerPractice = () => {
  const getData = () => {
    Axios.get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const postData = () => {
    Axios.post(url, { name: "Andi" });
  };

  const delData = () => {
    Axios.delete(url + "1");
  };

  const editData = () => {
    Axios.put(url + "1", { name: "Nana" });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>JsonServerPractice</h1>
      <button onClick={postData}>Add New Data</button>
      <button onClick={delData}>Delete Data</button>
      <button onClick={editData}>Edit Data</button>
    </div>
  );
};

export default JsonServerPractice;
