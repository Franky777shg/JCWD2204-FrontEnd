import { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, FormLabel, Button, Alert, AlertIcon } from "@chakra-ui/react";
import Axios from "axios";
const url = "http://localhost:2000/users";

export const RegisterPage = () => {
  const [show, setShow] = useState(false);

  const registerSchema = Yup.object().shape({
    password: Yup.string().required().min(8, "Password min 8 Character"),
  });

  const onRegister = async (data) => {
    try {
      const users = await Axios.get(url);
      const listUsername = users.data.map((item) => item.username);
      const listEmail = users.data.map((item) => item.email);

      if (!listEmail.includes(data.email)) {
        if (!listUsername.includes(data.username)) {
          if (data.password === data.confirmPassword) {
            delete data.confirmPassword;
            //   console.log(data);
            await Axios.post(url, data);
            setShow(true);
          } else {
            alert("Confirm Password doesn't match with password");
          }
        } else {
          alert("Username already exist");
        }
      } else {
        alert("Email already exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AlertComp = () => {
    return (
      <Alert show="false" status="success">
        <AlertIcon />
        Register Success!
      </Alert>
    );
  };

  return (
    <div>
      <Formik
        initialValues={{
          password: "",
          username: "",
          email: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, action) => {
          onRegister(values);
          action.setFieldValue("username", "");
          action.setFieldValue("password", "");
          action.setFieldValue("email", "");
          action.setFieldValue("confirmPassword", "");
        }}
      >
        {(props) => {
          console.log(props);
          return (
            <>
              {show ? <AlertComp /> : null}
              <Form>
                <FormLabel>Username</FormLabel>
                <Input as={Field} name="username" />
                <FormLabel>Email</FormLabel>
                <Input as={Field} name="email" />
                <FormLabel>Password</FormLabel>
                <Input as={Field} name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />
                <FormLabel>Confirm Password</FormLabel>
                <Input as={Field} name="confirmPassword" />
                <Button colorScheme="twitter" type="submit">
                  Register
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};
