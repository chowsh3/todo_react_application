import React, { Fragment, useState } from 'react';
import './AddTaskItem.css';

function AddTaskItem(props) {
    const [text, setText ] = useState("");
    const [dueDate, setDueDate ] = useState ("");

    function handleTextChange (event) {
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleDateChange (event) {
        setDueDate (event.target.value);
    }

    function handleAddTaskClick () {
        props.addTask(text, dueDate);

    }

    return (
        <Fragment>
              
            <form className ="form-inline add-task">
                <label className = "sr-only" htmlFor = "taskInput">Add new task</label>
                <input 
                    type="text" 
                    className="form-control add-task__input-field add-task--text" 
                    id = "taskInput"  
                    onChange = {handleTextChange }
                    value = {text}/>
                <input 
                    type = "date" 
                    className = "form-control add-tast__input-field add-task--date col-6" 
                    onChange = {handleDateChange}
                    value = {dueDate} />

                <button 
                    type="button" 
                    className="btn btn-dark add-task_add-button"
                    onClick = { handleAddTaskClick }
                    
                    >Add
                </button>

            </form>
                

        

        </Fragment>
      
    );
}

export default AddTaskItem;

