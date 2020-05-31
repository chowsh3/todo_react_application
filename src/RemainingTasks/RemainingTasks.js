import React from 'react';
import './RemainingTasks.css';

function RemainingTasks(props) {
    return <p className="remaining-tasks">You have { props.count} tasks to do</p>;
}

export default RemainingTasks;

