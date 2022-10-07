import { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { syncData } from "../redux/userSlice";
import { Table } from "react-bootstrap";

export const UsersPage = () => {
  const data = useSelector((state) => state.userSlice.value);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await Axios.get("http://localhost:2000/users");
      console.log(res.data);
      dispatch(syncData(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
