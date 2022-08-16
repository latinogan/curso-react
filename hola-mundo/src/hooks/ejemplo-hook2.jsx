/**
 * ejemplo de uso hooks:
 *  -useState()
 * -useRef()   {sirve para identificar valores referencial elementos dentro de la vista acceder a ello mas facil}
 
 * -useEffect()  { sirve para controlar los cambios de la vista actualizar}
 */


import React,{ useState , useRef, useEffect}from 'react';

const EjemploHook2 = () => {

    //craer dos contadores distintos
    //cada uno en un stado diferente
    const [contador1, setContador]= useState(0)
    const [contador2, setContador2]= useState(0)

    //crear una referencia con useRef() para asociar una variables
    //con un elemento del Dom del componente (vista html)

    const miRef= useRef();

    function incrementar1(){
        setContador(contador1+1)

    }
    function incrementar2(){
        setContador2(contador2+1)

    }

    /**
     * trabajando con useffect()
     * 
     * cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect()
     */

   /* useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    console.log("MOSTRANDO REFERENCIA AL ELEMENTO DEL DOMAIN");
    console.log(miRef)
     
    })*/

    /**
     *  Caso 2 ejecutar solo cuando cambie contador1
     * cada vex que se ejecute en contador 1 se ejecute lo que diga useEffect()
     */
    /**useEffect(() => {
        
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR1");
        console.log("MOSTRANDO REFERENCIA AL ELEMENTO DEL DOM");
        console.log(miRef)
        
    }, [contador1]);*/


     /**
     *  Caso 3 ejecutar solo cuando cambie contador1 o contador2
     * cada vex que se ejecute en contador 1 se ejecute lo que diga useEffect()
     * * cada vex que se ejecute en contador 2 se ejecute lo que diga useEffect()
     */
      useEffect(() => {
        
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR1");
        console.log("MOSTRANDO REFERENCIA AL ELEMENTO DEL DOM");
        console.log(miRef)
        
    }, [contador1,contador2])
    
  
    return (

    
        <div>
        <h1>**** ejemplo de useState()  useRef() u useEffect****</h1>
        <h2>Contador1: {contador1}</h2>
        <h2>Contador2: {contador2}</h2>
        {/** elemento referenciado */}
        <h4 ref={miRef}>ejemplo de elemento referenciado</h4>

        {/**botones para cambiar los contadores */}
        <div>
            <button onClick={incrementar1}>incrementar contador1</button>
            <button onClick={incrementar2}>incrementar contador2</button>
        </div>
        
        </div>
    );
}

export default EjemploHook2;
