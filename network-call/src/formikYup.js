import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikYup() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => {
          console.log(props);
          return (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="off"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  autoComplete="off"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  style={{ color: "red" }}
                />
              </div>
              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
