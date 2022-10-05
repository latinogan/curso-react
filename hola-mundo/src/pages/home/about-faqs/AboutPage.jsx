import React from "react"
import {useLocation, useNavigate} from "react-router-dom";

const AboutPage = () =>{
     const location= useLocation();
     const history=  useNavigate();

     console.log("we are in route" ,location.pathname); //"/about /faq"

     const navigate =(path)=> {
        history.push(path);
     }
    const goBack= () =>{
        history.goBack();
    }
     


    return (
        <div>
        <h1>  about /FAQS</h1>

        <div>
            <button onClick={ () =>navigate("/")}> Go to Home</button>
            <button onClick={goBack}>Go Back</button>
        </div>

        </div>
    )
}
export default AboutPage ;