import logo from './logo.svg';
import './App.css';
import Greeting  from './components/pure/greeting';
import Greetingf  from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/ejercicio123/componenteA';






function App() {
  const contactoPrueba = {
    nombre: 'Brian',
    apellido: 'Arce',
    email: 'pasquib@gmail.com',
    conectado: false,
    };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componentes propio greeting.jsx*/}
       {/* <Greeting name="Roger"></Greeting>*/}

       {/*componente greeting funcional */}
          {/*   <Greetingf ></Greetingf>*/}

         {/* componente listado de tarea */}

        {/*<TaskListComponent></TaskListComponent>*/}
        <ComponenteA  contacto= {contactoPrueba}></ComponenteA>

    

      </header>
    </div>
  );
}

export default App;
