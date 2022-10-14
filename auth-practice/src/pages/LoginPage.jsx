import { useRef, useState } from "react";
import { Input, Button, Container, Heading, FormLabel } from "@chakra-ui/react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { Navigate } from "react-router-dom";

const url = "http://localhost:2000/users";

export const LoginPage = () => {
  // const router = useRouter
  const usernameEmail = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const [move, setMove] = useState(false);
  console.log(move);

  const onLogin = async () => {
    // console.log(usernameEmail.current.value);
    // console.log(password.current.value);
    try {
      const resUsername = await Axios.get(
        url +
          `?username=${usernameEmail.current.value}&password=${password.current.value}`
      );
      // resUsername.data = [{}]
      const resEmail = await Axios.get(
        url +
          `?email=${usernameEmail.current.value}&password=${password.current.value}`
      );
      // resEmail.data = [{}]

      if (resUsername.data.length !== 0) {
        dispatch(login(resUsername.data[0]));
        localStorage.setItem("id", resUsername.data[0].id);
        console.log("test");
        setMove(true);
      } else if (resEmail.data.length !== 0) {
        dispatch(login(resEmail.data[0]));
        localStorage.setItem("id", resEmail.data[0].id);
        console.log("test");
        setMove(true);
      } else {
        alert("Gagal Login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return move ? (
    <Navigate to="/" replace={true} />
  ) : (
    <Container bg="#179cf0" w="300px" h="350px" mt={20}>
      <Heading mb={10}>Login</Heading>
      <FormLabel>Username/Email</FormLabel>
      <Input ref={usernameEmail} />
      <FormLabel>Password</FormLabel>
      <Input ref={password} />
      <Button mt={10} w="100%" onClick={onLogin}>
        Login
      </Button>
    </Container>
  );
};
