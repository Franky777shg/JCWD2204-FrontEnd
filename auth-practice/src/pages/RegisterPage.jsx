import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, FormLabel, Button } from "@chakra-ui/react";
import Axios from "axios";

export const RegisterPage = () => {
  const registerSchema = Yup.object().shape({
    password: Yup.string().required().min(8, "Password min 8 Character"),
  });

  const onRegister = async (data) => {
    try {
      if (data.password === data.confirmPassword) {
        delete data.confirmPassword;
        //   console.log(data);
        await Axios.post("http://localhost:2000/users", data);
      } else {
        alert("Confirm Password doesn't match with password");
      }
    } catch (err) {
      console.log(err);
    }
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
        onSubmit={(values) => {
          onRegister(values);
        }}
      >
        {(props) => {
          //   console.log(props);
          return (
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
          );
        }}
      </Formik>
    </div>
  );
};
