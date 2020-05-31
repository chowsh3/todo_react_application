import React, { useState } from 'react';
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
    { text: "paint", completed: false, dueDate: "2020-05-01", id: '001'},
    { text: "paint2", completed: true, dueDate: "2020-06-02", id: '002'},
    { text: "paint3", completed: true, dueDate: "2020-07-03", id: '003'},
    { text: "paint4", completed: false, dueDate: "2020-08-04", id: '004'},
    { text: "paint5", completed: true, dueDate: "2020-08-05", id: '005'},
  ]);
  const completedTasks = tasks.filter(task => task.completed);
  const activeTasks = tasks.filter(task => !task.completed);


  return (
    <div className="App">
      <Header/>
      <AddTaskItem/>
      <RemainingTasks count = { activeTasks.length}/>
      
      
      <ul className = "task-list container">
       { activeTasks.map(task=> <TaskItem key={ task.id } text={task.text} completed ={task.completed} dueDate = {task.dueDate}/>)}
       
       {/* /* <TaskItem text="paint" completed={false} dueDate="2020-05-01"/>
       <TaskItem text="paint2" completed={true} dueDate= "2020-06-01"/>
       <TaskItem text="paint3" completed={true} dueDate= "2020-07-01"/>
        <TaskItem text="paint4" completed={false} dueDate= "2020-08-01"/> */ }
     
      </ul>
      <CompletedTasks count = {completedTasks.length}/>
      
      <ul className="container">
      { completedTasks.map(task=> <TaskItem key={ task.text } text={task.text} completed ={task.completed} dueDate = {task.dueDate}/>)}
      </ul>
    </div>
  );
}

export default App;
