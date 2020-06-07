import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from "./Nav/Nav"
import TaskItem from "./TaskItem/TaskItem"
import AddTaskItem from "./AddTaskItem/AddTaskItem"
import RemainingTasks from './RemainingTasks/RemainingTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import './App.css';



function App() {
  // const tasks = useState()[0];
  // const setTasks = useState()[1];

  const [tasks, setTasks] = useState([
    { text: "paint", completed: false, dueDate: "2020-05-01", id: uuidv4()},
    { text: "paint2", completed: true, dueDate: "2020-06-02", id: uuidv4()},
    { text: "paint3", completed: true, dueDate: "2020-07-03", id: uuidv4()},
    { text: "paint4", completed: false, dueDate: "2020-08-04", id: uuidv4()},
    { text: "paint5", completed: true, dueDate: "2020-08-05", id: uuidv4()},
  ]);

  const [ deletedTasks, setDeletedTasks ] = useState([])

  const completedTasks = tasks.filter(task => task.completed);
  const activeTasks = tasks.filter(task => !task.completed);

  function deleteTask (id) {
    //look through all tasks, find where task.id === id
    //remove that task
    //update the task state
    const updatedTasks = tasks.filter (task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask (id) {
    //look through all tasks, find where task.id == id
    //if that task = complete 
    //update task state to ensure it complete
    const completedTask = tasks.map (task => {
      if(task.id === id){
        task.completed=true;
      }
      return task;
    })
    setTasks(completedTask);
  }

  function unCompleteTask (id){
    //look through all tasks, find where task.id=== id
    // if task =complete 
    //update task state to see if its false
    const completedTask = tasks.map (task => {
      if(task.id === id){
        task.completed=false
      }
      return task;
    })
    setTasks(completedTask);

  }

  function addTask (text, dueDate) {
    //get a copy of the tasks that are already there
    //create a new task, and merge it into this array
    //update the task state

    const newTask = { 
      text: text, 
      completed: false, 
      dueDate: dueDate, 
      id: uuidv4()
    }

    const updatedTasks = [ ...tasks, newTask]

    setTasks(updatedTasks);
  }


  return (
    <div className="App">
      <Header/>
      <AddTaskItem addTask = { addTask }/>
      <RemainingTasks count = { activeTasks.length}/>
      
      
      <ul className = "task-list container">
       { activeTasks.map(task=> <TaskItem unCompleteTask = {unCompleteTask} completeTask = {completeTask} deleteTask = {deleteTask} id={task.id} key={ task.id } text={task.text} completed ={task.completed} dueDate = {task.dueDate}/>)}
       
       {/* /* <TaskItem text="paint" completed={false} dueDate="2020-05-01"/>
       <TaskItem text="paint2" completed={true} dueDate= "2020-06-01"/>
       <TaskItem text="paint3" completed={true} dueDate= "2020-07-01"/>
        <TaskItem text="paint4" completed={false} dueDate= "2020-08-01"/> */ }
     
      </ul>
      <CompletedTasks count = {completedTasks.length}/>
      
      <ul className="container">
      { completedTasks.map(task=> <TaskItem unCompleteTask = {unCompleteTask} completeTask = {completeTask} deleteTask = {deleteTask} id={task.id} key={ task.text } text={task.text} completed ={task.completed} dueDate = {task.dueDate}/>)}
      </ul>
    </div>
  );
}

export default App;
