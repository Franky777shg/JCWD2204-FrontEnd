import { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  const [redirect, setRedirect] = useState(false);

  const registerSchema = Yup.object().shape({
    name: Yup.string().required().min(6, "Harus 6 character"),
    email: Yup.string().required().email("Invalid Input"),
    password: Yup.string()
      .required()
      .min(6, "Harus 6 character")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/,
        {
          excludeEmptyString: true,
          message:
            "at least one uppercase letter, one lowercase, one number or special character",
        }
      ),
  });

  const onRegister = async (data) => {
    try {
      console.log(data);
      await Axios.post("http://localhost:2000/users", data);
      setRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  return redirect ? (
    <Navigate to="/" />
  ) : (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          onRegister(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <h1>Page Register</h1>
              <div>
                <label>Name</label>
                <Field type="text" name="name" placeholder="Input here" />
                <ErrorMessage
                  component="div"
                  name="name"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label>Email</label>
                <Field type="text" name="email" placeholder="Input here" />
                <ErrorMessage
                  component="div"
                  name="email"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label>Password</label>
                <Field type="text" name="password" placeholder="Input here" />
                <ErrorMessage
                  component="div"
                  name="password"
                  style={{ color: "red" }}
                />
              </div>
              <Button type="submit" variant="primary">
                Register
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
