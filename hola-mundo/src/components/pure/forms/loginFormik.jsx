import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Emailformat invalid")
    .required("Email is required"),
  password: Yup.string().required("Password required"),
});

const LoginFormik = () => {
  let initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h1>login formik</h1>
      <Formik
        initialValues={initialCredentials}
        /**yup validation svhema */
        validationShema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          //we save data in the localstorage
          localStorage.setItem("credentials", values);
        }}
      >
        {/** we obtain props from formik */}

        {({
          errors,
          touched,
          isSubmitting,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
            {errors.password && touched.password && (
              <div className="error">
                <ErrorMessage name="password"></ErrorMessage>
              </div>
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials....</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
