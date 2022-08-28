import React , {useState} from 'react';
import { useEffect } from 'react';
import { LEVELS } from '../../models/level.enum';
import {Task} from "../../models/task.class"
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    let defaultTask= new Task( "Rogers","Default description",false,LEVELS.NORMAL);
    let defaultTask1= new Task( "BRIAN","Default description1",true,LEVELS.URGENT);
    let defaultTask2= new Task( "Diego","Default description2",false,LEVELS.BLOCKING);


// estado del componente
 const [ tasks, setTasks] = useState([defaultTask,defaultTask1,defaultTask2]);
 const [ loading, setLoading] = useState(true);

 

 //control del ciclo del vida del componente
  useEffect(() => {
    console.log("Task State has been modefy")
    setLoading(false)
    return () => {
        console.log("TaskList component is going to unmount")
    };
  }, [tasks]);


    const changeCompleted=(id) =>{
        console.log("Cambiar estado de una tarea")

    }

    return (
        <div>
        <div className="col-12">
           <h1> Your TASKS :</h1>
           <div className="card">
           {/* card header title bootstrap*/ }
           <div className="card-header p-3">
           <h5> your task</h5>
           </div>
           <div className="card-body" data-mdb-perfect-scrollbar="true" style={ { position:"relative" ,height: " 400px"}}>
           <table>
           <thead>
           <tr>
           <th scope="col"> Title</th>
           <th scope="col"> Description</th>
           <th scope="col"> Priority</th>
           <th scope="col"> actions</th>
        

           </tr>
           </thead>
           <tbody>
           {/*to do iterar sobre una lista de tarea */}
             {/*  aplicar un for o map para renderizar una lista  */}

             {tasks.map((task,index) =>{
                return(<TaskComponent key={index} task= {task}></TaskComponent>)
             })}
        
           
           </tbody>
           </table>

           </div>
          {/* <Taskform></Taskform>*/}

           </div>
        </div>
        {/*  aplicar un for o map para renderizar una lista  */}
        {/*<TaskComponent task= {defaultTask}></TaskComponent>*/}
        </div>
        
            
    );
};


export default TaskListComponent;
