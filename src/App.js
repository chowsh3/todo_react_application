import React, { useState } from 'react';
import "./App.css";
import TaskItem from "./TaskItem/TaskItem"
import AddTaskItem from "./AddTaskItem/AddTaskItem"
import NewTasks from "./NewTasks/NewTasks"
import Nav from "./Nav/Nav"
import './App.css';
import RemainingTasks from './RemainingTasks/RemainingTasks';

function App() {
  // const tasks = useState()[0];
  // const setTasks = useState()[1];

  cont [tasks, setTasks] = useState([
    { text: "paint", completed: false, dueDate: "2020-05-01"},
    { text: "paint", completed: true, dueDate: "2020-06-01"},
    { text: "paint", completed: true, dueDate: "2020-07-01"},
    { text: "paint", completed: false, dueDate: "2020-08-01"},
  ]);


  return (
    <div className="App container">
      <Nav/>
      <AddTaskItem/>
      <RemainingTasks/>
      <NewTasks/>
      <h1 className="completed-header">
        Completed Tasks
      </h1>
      
      <TaskItem text="Task one" />
      <TaskItem text="Task two"/>
      <TaskItem text="Task three"/>
      <TaskItem text="Task four"/>
      
    </div>
  );
}

export default App;
