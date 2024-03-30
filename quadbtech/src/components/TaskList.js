import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import './TaskStyles.css';

function TaskList() {
    const tasks = useSelector(state => state.tasks);

    return (
        <div className="task-table-container">
            <div>
                <h2>Tasks:</h2>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <TaskItem key={task.id} task={task} index={index + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
        
    );
}

export default TaskList;
