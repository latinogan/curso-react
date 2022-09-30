import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ROLES } from "../../../models/roles.enu";
import { User } from "../../../models/user.class";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username to long")
      .required("Username is required"),
    email: Yup.string()
      .email("invalid email address")
      .required("Email is required"),
      role: Yup.string().oneOf([ROLES.USER , ROLES.ADMIN], "YOU MUST select one role: User/admin")
                                        .required("role is required"),
    password: Yup.string().required("pASSWORD is required"),
                            confirm:Yup.string()
                            .when("password", { 
                            is:value=>(value && value.length >0? true : false),
                            then: Yup.string().oneOf (
                                [Yup.ref("password")] ,
                                `! Password must match`
                            )
                        }).required("you must comfirm your password")
                            
  });

  const submit = () => {
    alert("register user");
  };

  return(
  <div>

  <h4>Register formik</h4>

  <Formik
   initialValues= {initialValues}
       /**yup validation svhema */
       validationShema={registerSchema}
   onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        
        }}
  
  >
    {({
          errors,
          touched,
          isSubmitting,
          values,
          handleChange,
          handleBlur,
        }) => (
            <form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="your username"
            />


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
              placeholder="your password"
            />
            {errors.password && touched.password && (
              <div className="error">
                <ErrorMessage name="password"></ErrorMessage>
              </div>
            )}

            <label htmlFor="confirm">confirm password</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="confirm password"
            />
            {errors.confirm && touched.confirm && (
              <div className="error">
                <ErrorMessage name="confirm"></ErrorMessage>
              </div>
            )}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>sending your credentials....</p> : null}

            </form>
        )
        }

        

  </Formik>

  </div>
  )
};

export default RegisterFormik;
