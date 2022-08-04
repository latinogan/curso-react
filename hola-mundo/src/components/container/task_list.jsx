import React from 'react';
import { LEVELS } from '../../models/level.enum';
import {Task} from "../../models/task.class"
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    let defaultTask= new Task( "Roger","Default description",false,LEVELS.NORMAL);

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
