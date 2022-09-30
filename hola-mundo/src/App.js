import logo from './logo.svg';
import './App.css';
import Greeting  from './components/pure/greeting';
import Greetingf  from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/ejercicio123/componenteA';
import EjemploHooks1 from './hooks/ejemplo-hooks1';
import EjemploHook2 from './hooks/ejemplo-hook2';
import MiComponenteConContexto from './hooks/ejemplo-hooks3'; 
import GreetingStyled from "./components/pure/greetingStyled"
import StilosGreeting from "./components/pure/stilosGreeting"
import Father  from "./components/container/father"
import Optionalrender from "./components/pure/optionalRender"
import LoginFormik from "./components/pure/forms/loginFormik"








function App() {
  const contactoPrueba = {
    nombre: 'Brian',
    apellido: 'Arce',
    email: 'pasquib@gmail.com',
    conectado: false,
    };
  return (
    <div className="App">
     {/*  <header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*componentes propio greeting.jsx*/}
       {/* <Greeting name="Roger"></Greeting>*/}

       {/*componente greeting funcional */}
          {/*   <Greetingf ></Greetingf>*/}

         {/* componente listado de tarea */}

        {/*<TaskListComponent></TaskListComponent>*/}
       {  /*<ComponenteA  contacto= {contactoPrueba}></ComponenteA>*/}


       {/** ejemplo de uso de hooks */}
     {/*  <EjemploHooks1></EjemploHooks1>*/}
     {/*  <EjemploHook2></EjemploHook2>*/}
     {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
   { /* <GreetingStyled name="Roger"></GreetingStyled>*/}
   {/*<StilosGreeting name="Eduardo Castillo"></StilosGreeting>*/}
      {/*</header>*/}

      {/*<Optionalrender></Optionalrender>*/}
      {/**proyecto final */}
    {/* <TaskListComponent></TaskListComponent>*/}
    <LoginFormik></LoginFormik>

     {/** gestion de eventos */}
    {/*<Father></Father>*/}
    </div>
  );
}

export default App;
