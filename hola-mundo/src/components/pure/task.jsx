import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';



//importamos la hoja de estilos de task.scss
import "../styles/task.scss"


export const TaskComponent = ({task}) => {
   useEffect(() => {
    console.log("Tarea creada")
    return () => {
        console.log(`Task : ${task.name} is going to unmount`)
    };
   }, [task]);

   {/** funcion que retorna un badge  dependiendo el nivel este el task */}
   function taskLevelBadge () {
    switch(task.level) {
        case LEVELS.NORMAL:
            return (<h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
            </h6>)
            case LEVELS.URGENT:
                return(<h6 className="mb-0">
                <span className="badge bg-warning">{task.level}</span>
                </h6>) 
                 case LEVELS.BLOCKING:
                    return (<h6 className="mb-0">
                    <span className="badge bg-danger">{task.level}</span>
                    </h6>)
        default:
        break;
    }

   }
 {/**function that return icon depending on completion of the task*/}
   function taskIconCompleted () {
    if (task.completed) {
        return (<i className="bi bi-check-square" style={{color:"green"}}></i>)
    }else {
        return (<i className="bi bi-square" style={{color:"red"}}></i>)
    }

   }

    return (
        <tr className="fw-normal">
        <th>
        <span className="ms-2">{task.name}</span>
        </th>
        <td className="align-middle">
        <span className="ms-2">{task.description}</span>
</td>
{/** sustituir por un badge */}
<td className="align-middle">
 {taskLevelBadge()}
</td>
<td className="align-middle">
{/**sustituir  por iconos*/}

{/** execution  of function to return icon depending on completion */}
 
{taskIconCompleted ()}
 <i className="bi-trash" style={{color:"tomato" , fontSize:"20px"}}></i>

{/*<span >{task.completed ? "Completed" :"Pending"}</span>*/}
</td>

        </tr>

          /*  <div>
            <h2 className="task-name">
            Name: {task.name}
            </h2>
            <h3>
            Description: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                this task is : {task.completed ? "COMPLETED":"PENDING"}
            </h5>
                
            </div>*/
    );
};


TaskComponent.propTypes = {
 task : PropTypes.instanceOf(Task)
};


export default TaskComponent;


