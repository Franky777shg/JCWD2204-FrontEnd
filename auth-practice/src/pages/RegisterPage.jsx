import { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, FormLabel, Button, Alert, AlertIcon } from "@chakra-ui/react";
import Axios from "axios";
const url = "http://localhost:2000/users/register";

export const RegisterPage = () => {
  const [show, setShow] = useState(false);

  const registerSchema = Yup.object().shape({
    // password: Yup.string().required().min(8, "Password min 8 Character"),
  });

  const onRegister = async (data) => {
    try {
      console.log(data);
      const result = await Axios.post(url, data);
      console.log(result);
      alert(result.data);
    } catch (err) {
      console.log(err);
      alert(err.response.data);
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
          phoneNumber: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, action) => {
          onRegister(values);
          // action.setFieldValue("username", "");
          // action.setFieldValue("password", "");
          // action.setFieldValue("email", "");
          // action.setFieldValue("confirmPassword", "");
          // action.setFieldValue("phoneNumber", "");
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
                <FormLabel>Phone Number</FormLabel>
                <Input as={Field} name="phoneNumber" />
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
