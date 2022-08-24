/**
 * componente que va a tener un formulario para
 * autenticacion de usuarios
 */

import React, { useState }from 'react';

const LoginForms = () => {
    const initialCredencial= [
        {
            user: "",
            password: ""
        }
    ];

   const [credencial, setCredencial] = useState(initialCredencial);

    return (
        <div>

            
        </div>
    );
}

export default LoginForms;


