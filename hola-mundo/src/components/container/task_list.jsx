import React , {useState} from 'react';
import { useEffect } from 'react';
import { LEVELS } from '../../models/level.enum';
import {Task} from "../../models/task.class"
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    let defaultTask= new Task( "Roger","Default description",false,LEVELS.NORMAL);
// estado del componente
 const [ tasks, setTasks] = useState([defaultTask]);
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
        <div>
            Your TASKS :
        </div>
        {/*  aplicar un for o map para renderizar una lista  */}
        <TaskComponent task= {defaultTask}></TaskComponent>
        </div>
        
            
    );
};


export default TaskListComponent;
