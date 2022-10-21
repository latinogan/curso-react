import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {login,getAllUsers,getAllPagedUsers, getAllUsersById, createUser,deleteUsersById, updateUser} from "../../services/axiosCRUDServices"

const Axioscrudexample=()=>{
    let initialCredentials = {
        email: "",
        password: "",
      }

      const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Emailformat invalid")
          .required("Email is required"),
        password: Yup.string().required("Password required"),
      });

    const authUser =(values)=>{
        login(values.email,values.password)
        .then((response) =>{
            if(response.data.token){
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem("token",response.data.token)

            } else {
                sessionStorage.removeItem("token")
                throw new Error("login failure")
               
            }
           
        })
        .catch((error)=>{
            alert(`something went wrong : ${error}`)
            sessionStorage.removeItem("token")
        })
        .finally(()=>console.log("login done"))
    }

    // crud example

    const obtainAllUsers=()=>{
         getAllUsers()
         .then((response)=>{
            if(response.data.data&& response.status===200){
                alert(JSON.stringify(response.data.data))
            }else {
                throw new Error("no user Found")
            }
         })
         .catch((error) =>alert(`something went wrong ${error}`))
    }
    const obtainAllPagedUsers=(page)=>{
        getAllPagedUsers(page).then((response)=>{
            if(response.data.data && response.status===200){
                alert(JSON.stringify(response.data.data))
            }else {
                throw new Error(`No user found in page ${page}`)
            }
        })
        .catch((error) =>alert(`something went wrong ${error}`))
   }
   const obtainUserById=(id)=> {
    getAllUsersById(id).then((response)=>{
        if(response.data.data && response.status===200){
            alert(JSON.stringify(response.data.data))
        }else {
            throw new Error("user not Found")
        }
        
     })
     .catch((error) =>alert(`something went wrong ${error}`))

   }
   const createNewUsers=(name,job)=>{
    createUser(name,job).then((response)=>{
        if(response.data && response.status===201){
            alert(JSON.stringify(response.data))
        }else {
            throw new Error("user not crerated")
        }
       
     })
     .catch((error) =>alert(`something went wrong ${error}`))
    

   }
   const updateUserById=(id,name,job)=> {
    updateUser(id,name,job).then((response)=>{
        if(response.data && response.status===200){
            alert(JSON.stringify(response.data))
        }else {
            throw new Error("user not Found and not updated")
        }
        
     })
     .catch((error) =>alert(`something went wrong ${error}`))

   }
   const deleteUser=(id)=> {
    deleteUsersById(id).then((response)=>{
        if( response.status===204){
            alert(`user with id: ${id} successfully deleted`)
        }else {
            throw new Error("user not Found & no deleted user")
        }
        
     })
     .catch((error) =>alert(`something went wrong ${error}`))

   }
    
    return(
        
        
         <div>
      <h1>login formik</h1>
      <Formik
        initialValues={initialCredentials}
        /**yup validation svhema */
        validationShema={loginSchema}
        onSubmit={async (values) => {
            authUser(values)
         
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
      {/**example  buttons to test api response*/}
      <div>
      <button onClick={ obtainAllUsers}>Get all Users with axios</button>
      <button onClick={()=>  obtainAllPagedUsers(1)}>
        Get All Users (Page 1) with axios
      </button>
      <button onClick={()=> obtainUserById(1)}>
        Get User 1
      </button>
      <button onClick={()=> createNewUsers("morpheus","leader")}>
        Create User 
      </button>
      <button onClick={()=> updateUserById(1,"morpheus","developer")}>
        Update  User 
      </button>
      <button onClick={()=>deleteUser(1)}>
        delete  User 
      </button>
      


      </div>
    </div>
           
    )
}

export default Axioscrudexample;