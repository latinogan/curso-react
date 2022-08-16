/** 
*ejemplo de uso del hooks useState
* Crear un componente de tipo funcion y acceder a su estado privado atravez de un hook y ademas poder modificarlo
*/

import React, { useState } from 'react';

const EjemploHooks1 = () => {
    // valor inicial para un contador
    const valorInicial =0;

    //valor inicial para una persona
    const personaInicial={
        nombre:"Roger",
        email:"roger.prog@gmail.com"
    }
    /**
     * queremos que el valorInicial y personaInicial sean el valorInicial
     * parte del estado del componente para asi poder gestionar su cambio 
     * y que se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable , funcion paraCambiar]= useState(InitialState)
     */
     
    /**
     * funcion para actualizar el estado  que tiene el contador
     */
    const [contador, setcontador] = useState(valorInicial);
    const [persona, setPersona]= useState(personaInicial);

 /**
  * funcion para actualizar estado de persona en component
  */
    function incrementarContador(){
        setcontador(contador +1)

    }

    function actualizarPersona(){
        setPersona({
            nombre:"brian",
            email:"brian@gmail.com"

        })
    }


    return (
        <div>
        <h1>**** ejemplo de useState() ****</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de persona :</h2>
        <h3>NOMBRE : {persona.nombre}</h3>
        <h4>EMAIL: {persona.email}</h4>

        {/**bloque de botones para actualizar el estado del componente */}
        <button onClick= {incrementarContador}>incrementar contador</button>
        <button onClick ={actualizarPersona}> ActualizarPersona</button>
        </div>
    );
}

export default EjemploHooks1;
