import React,{useRef} from 'react';
import PropTypes from "prop-types";
import { LEVELS } from '../../../models/level.enum';
import {Task} from "../../../models/task.class"

const Taskform = ({add , length}) => {
    const nameRef = useRef("");
    const descriptionRef= useRef("")
    const levelRef =useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault();
        const newTask= new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask)
    }

    const normalStyle={
        color:"blue",
        fontWeight:"bold"
    }
    const urgentStyle={
        color:"yellow",
        fontWeight:"bold"
    }

    const warningStyle={
        color:"red",
        fontWeight:"bold"
    }

    return (
        <form onSubmit={addTask} className=" d-flex justify-content-center align-items-center mb-4">
        <div className=" form-outline flex-fill">
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder="taskname"/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required  placeholder="Task Description"/>
        <label htmlFor= 'selectLevel' className='sr-only'>Priority </label>
        <select  className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        <option value= {LEVELS.NORMAL}>
                 Normal
         </option>
        <option style={urgentStyle} value={LEVELS.URGENT}>
    Urgent
</option>
 <option style={warningStyle} value={LEVELS.BLOCKING}>
    Blocking       
</option>
       </select>
       <button type="submit" className="btn btn-success btn-lg ms-2">
        { length > 0  ? "add new task" : "Create first task" }
        </button> 
        
        </div>
                
        </form>
    );
}

Taskform.propTypes = {
    add : PropTypes.func.isRequired ,
    length : PropTypes.number.isRequired

}

export default Taskform;
