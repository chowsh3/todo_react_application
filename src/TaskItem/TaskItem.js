import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
    return (
        <div className="task-item">
           <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                        <div className="card-buttons float-right"></div>

                    </div>
                </div>
            </div>
        </div>
        </div>


    );
}

export default TaskItem;

