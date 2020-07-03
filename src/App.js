import React, { useState, useEffect, Fragment } from 'react';
import Calendar from 'react-calendar';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


import Header from "./Nav/Nav"
import TaskItem from "./TaskItem/TaskItem"
import AddTaskItem from "./AddTaskItem/AddTaskItem"
import RemainingTasks from './RemainingTasks/RemainingTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import './App.css';



function App() {
  // const tasks = useState()[0];
  // const setTasks = useState()[1];
  // const [tasks, setTasks] = useState([
  //   { text: "paint", completed: false, dueDate: "2020-05-01", id: uuidv4()},
  //   { text: "paint2", completed: true, dueDate: "2020-06-02", id: uuidv4()},
  //   { text: "paint3", completed: true, dueDate: "2020-07-03", id: uuidv4()},
  //   { text: "paint4", completed: false, dueDate: "2020-08-04", id: uuidv4()},
  //   { text: "paint5", completed: true, dueDate: "2020-08-05", id: uuidv4()},
  // ]);

  const [tasks, setTasks] = useState();


  useEffect(() => {
    axios.get("https://4zv1zdfwkc.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(
        //request is successful, run this bit
        (response) => {
          console.log(response.data);
          setTasks(response.data.tasks);
        }
      )
      .catch(
        //request has given an error, run this bit
        (error) => {
          console.log("error fetching data", error)
        }
      )
      .finally(() => console.log("i am done"))


  }, [])

  // const [deletedTasks, setDeletedTasks] = useState([])

  const completedTasks = tasks && tasks.filter(task => task.completed);
  const activeTasks = tasks && tasks.filter(task => !task.completed);

  function deleteTask(id) {
    //look through all tasks, find where task.id === id
    //remove that task
    //update the task state
    const updatedTasks = tasks.filter(task => task.taskId !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    //look through all tasks, find where task.id == id
    //if that task = complete 
    //update task state to ensure it complete
    const completedTask = tasks.map(task => {
      if (task.taskId === id) {
        task.completed = true;
      }
      return task;
    })
    setTasks(completedTask);
  }

  function unCompleteTask(id) {
    //look through all tasks, find where task.id=== id
    // if task =complete 
    //update task state to see if its false
    const completedTask = tasks.map(task => {
      if (task.taskId === id) {
        task.completed = false
      }
      return task;
    })
    setTasks(completedTask);

  }

  function addTask(text, dueDate) {
    //get a copy of the tasks that are already there
    //create a new task, and merge it into this array
    //update the task state

    const newTask = {
      text: text,
      completed: false,
      date: dueDate,
      // id: uuidv4()
    }

    const updatedTasks = [...tasks, newTask]

    setTasks(updatedTasks);
  }

  function editTask(text, id) {

    const updatedTask = tasks.map(task => {
      if (task.taskId === id) {
        task.text = text;

      }
      return task;


    })
    setTasks(updatedTask);
  }

  function editDate(dueDate, id) {
    const updatedDate = tasks.map(task => {
      if (task.taskId === id) {
        task.date = dueDate;
      }

      return task;
    })

    setTasks(updatedDate);
  }


  return (
    <div className="App">
      <Header />
      <AddTaskItem addTask={addTask} />
      {tasks && (
        <Fragment>
          <RemainingTasks count={activeTasks.length} />
          <ul className="task-list container">
            {activeTasks.map(task =>{ 
              return <TaskItem 
              editDate={editDate} 
              editTask={editTask} 
              unCompleteTask={unCompleteTask} 
              completeTask={completeTask} 
              deleteTask={deleteTask} 
              id={task.taskId} 
              key={task.taskId} 
              text={task.text} 
              completed={task.completed} 
              dueDate={task.date}/>
              })}
          </ul>
            {/* /* <TaskItem text="paint" completed={false} dueDate="2020-05-01"/>
         <TaskItem text="paint2" completed={true} dueDate= "2020-06-01"/>
         <TaskItem text="paint3" completed={true} dueDate= "2020-07-01"/>
          <TaskItem text="paint4" completed={false} dueDate= "2020-08-01"/> */ }

          
          <CompletedTasks count={completedTasks.length} />

          <ul className="container">
            {completedTasks.map(task => { 
              return <TaskItem 
              editDate={editDate} 
              editTask={editTask} 
              unCompleteTask={unCompleteTask} 
              completeTask={completeTask} 
              deleteTask={deleteTask} 
              id={task.taskId} 
              key={task.taskId} 
              text={task.text} 
              completed={task.completed} 
              dueDate={task.date} />
            })}
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default App;
