import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
    return (
        <div className={`card task ${ props.completed ?'task--complete' : 'task--active'}`}>

            <span className = "task__text">
                {props.text}
                <span className="task__date">{props.dueDate}</span>
                </span>

            <div className="buttons__action">
                <input type="checkbox" aria-label="Checkbox for following text input"></input>

                

                <button className="btn__delete btn-danger">
                    <svg className="bi bi-trash" width="1em" height="1em"
                        viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                        <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <button className="btn__edit btn-secondary">
                    <svg className="bi bi-pencil" width="1em" height="1em"
                        viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                { props.completed===false && <button className="btn__reminder btn-warning">
                    <svg className="bi bi-bell" width="1em"
                        height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z" />
                        <path fill-rule="evenodd"
                            d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"
                            clip-rule="evenodd" />
                    </svg>
                </button>}

              

             



            </div>






        </div>
    );
}

export default TaskItem;

