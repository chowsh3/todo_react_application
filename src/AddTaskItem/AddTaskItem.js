import React from 'react';
import './AddTaskItem.css';

function AddTaskItem() {
    return (
        <div className="Add-task-item col">
            <div className="row">
                <div className="a col-10">
                    <input className="form-control"
                        type="text"
                        placeholder="What do you want to do?">

                    </input>
                </div>

                
                <button type="button" className="btn btn-dark"><svg className="bi bi-plus-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd" />
                </svg>
                </button>

              
               

            </div>

        </div>


    );
}

export default AddTaskItem;

