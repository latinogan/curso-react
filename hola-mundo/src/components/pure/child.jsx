import React, { useRef } from 'react';

const Child = ({ name ,send}) => {
 const messageRef= useRef(" ")

   function  pressButton (){
    const text= messageRef.current.value;
    alert( `Text in input: ${ text}`)

    }

    function pressButtonParams(text){
        alert( `Text input: ${text}`)
    }


    return (
        <div>
            <p onMouseOver ={() => console.log("On mouse Over")}>Child Component</p>
            <button onClick= {() => console.log("Boton 1 pulsado") }>
            Button1
            </button>
            <button onClick= {pressButton}>
            Button2
            
            </button>
            <button onClick={ () =>pressButtonParams("hELLO")}>
            Button3
            
            </button>
            <input placeholder="send text to fathe" onFocus={( ) => console.log("Input focus")}  
            onChange={( e) => console.log(" input changed",e)}
             
            ref= {messageRef}

            />
            <button onClick={() => send("hello father")}>Send Message</button>
        </div>
    );
}

export default Child;
