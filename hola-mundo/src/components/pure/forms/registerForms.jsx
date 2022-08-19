import React,{useState} from 'react';

const RegisterForms = () => {
    const initialDatal= [
        {
            user: "",
            name:"",
            email:"",
            password: ""
        }
    ];

   const [data, setData] = useState(initialDatal);
    return (
        <div>
            
        </div>
    );
}

export default RegisterForms;

