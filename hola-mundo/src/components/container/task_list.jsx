import React, { useState } from "react";
import { useEffect } from "react";
import { LEVELS } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import Taskform from "../pure/forms/taskform";

const TaskListComponent = () => {
  let defaultTask = new Task(
    "Rogers",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  let defaultTask1 = new Task(
    "BRIAN",
    "Default description1",
    false,
    LEVELS.URGENT
  );
  let defaultTask2 = new Task(
    "Diego",
    "Default description2",
    false,
    LEVELS.BLOCKING
  );

  // estado del componente
  const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2]);
  const [loading, setLoading] = useState(true);

  //control del ciclo del vida del componente
  useEffect(() => {
    console.log("Task State has been modefied");
    setTimeout(() => {
      setLoading(false);
    },2000);
    
    return () => {
      console.log("TaskList component is going to unmount");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("complete this task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // update the state of the component and it will update the itiratopn of the task in order to show task updated
    setTasks(tempTasks);
  }
  function deleteTask(task) {
    console.log("delete this task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  function addTask(task) {
    console.log("ADD this task", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
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

          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable=<Table></Table>
  if(tasks.length>0){
    tasksTable=<Table></Table>
  }else{
    tasksTable=( 
    <div>
   <h3>There no tasks to show</h3>
   <h4> Pleas create a task</h4>
    </div>
    )
  }
  const loadingstyle={
    color:"grey",
    fontSize:"30px",
    fontWeigt:"bold"

  }

  return (
    <div>
      <div className="col-12">
        <h1> Your TASKS :</h1>
        <div className="card">
          {/* card header title bootstrap*/}
          <div className="card-header p-3">
            <h5> your task</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: " 400px" }}
          >
           { loading ? <p style={loadingstyle}>loading tasks ...</p>: tasksTable}
          </div>
        </div>
      </div>
      {/*  aplicar un for o map para renderizar una lista  */}
      {/*<TaskComponent task= {defaultTask}></TaskComponent>*/}

      <Taskform add={addTask} length={tasks.length}></Taskform>
    </div>
  );
};

export default TaskListComponent;
