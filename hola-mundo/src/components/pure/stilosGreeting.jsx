/**aqui un ejemplo */
import React, { useState } from 'react';

const StilosGreeting = (props) => {
    const logeado= {
        color:"green",
        fontWeight:"bold"
    }
    const noLogeado= {
        color:"red"
    }
    const [logeados, setlogeados] = useState(false);
    
    return (
        <div style={logeados ? logeado : noLogeado}>
       { logeados ? (<h1>Saludo {props.name}</h1>) : (<h1>logeate</h1>)}

        <button onClick= {() =>{
            console.log("el usuario dio click")
            setlogeados(! logeados)
        }}>
        {logeados ? "Conectado" :"Desconectado" }
        </button>
    

        </div>
    );
}

export default StilosGreeting;
