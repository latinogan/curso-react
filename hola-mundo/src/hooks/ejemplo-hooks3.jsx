/***
*Ejemplo Hooks:
*-useState()
 *-   useContext()*
*/

import React , { useState, useContext} from 'react';

/**
*
*@returns Componente1
 *Dispone de un conexto que va a tener un valor
*que recibe desde el padre
*/

const miContexto=React.createContext(null)


const Componente1=()=>{

 // Inicializamos un estado vacio que vaarellenarse con los
// datos del contexto del padre
const state= useContext(miContexto)


    return(
        <div>
        <h1>
            El Token es: {state.token}    
        </h1>
        {   /*Pintamos el componente2*/}
        <Componente2></Componente2>
        </div>
    );
}

const Componente2=()=>{
    const state= useContext(miContexto);
    
    return(
        <div>
        <h2>
            La sesion es :  {state.sesion}
        </h2>
        </div>
    );
}

 export default function MiComponenteConContexto(){
  const estadoInicial= {
    token:"1234557",
    sesion:1
  }
  // Creamos el estado de este componente

  const [sessionData,setSessionData]= useState(estadoInicial)

  function actualizarSesion(){
    setSessionData(
        {
            token:"JWT12345678",
                sesion:sessionData.sesion +1

    }
    );
  }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
            {/*ademas si se actauliza los componentes de aqui tambien lo actualiza */}
        
        <h1>
             ******Ejemplo de useSte y useContext******
        </h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}> Actualizar session</button>
        </miContexto.Provider>
        
    )
 }
       
