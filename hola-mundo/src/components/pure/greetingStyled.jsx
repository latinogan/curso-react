import React ,{ useState}from 'react';
/**definiendo estilos en contante */

//estilo para usuario logeado
const loggedStyle= {
    color:"blue"
};

//estilo para usuario no logeado 
const unloggedStyle={
    color: "tomato",
    fontWeight:"bold"
}


const GreetingStyled = (props) => {
/** generamos un estado para el componente 
 * y asi controlar si el usuario esta o no conectado
 */

    const [logged, setlogged] = useState(false);

    return (
       // este es un codigo renderizado mas corto
      <div style ={ logged ? loggedStyle : unloggedStyle}>
    {/*{ logged ? (<h1>Hola: {props.name}</h1>) : (<h1>Pleas Login</h1>)}*/}

          {/*codigo normal*/}
        <h1>
        Hola : {props.name}
        </h1>
        <button onClick= {() => {
            console.log("boton ha sido pulsado")
            setlogged( !logged);
        }}>
        {logged ? "Logout" :"Login"}
        </button>

            
        </div>
    );
}

export default GreetingStyled;
