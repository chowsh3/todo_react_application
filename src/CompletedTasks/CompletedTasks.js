import React from 'react';
import './CompletedTasks.css';

function CompletedTasks(props) {
    return <p className="completed-tasks">You have { props.count} Completed tasks</p>;
}

export default CompletedTasks;
