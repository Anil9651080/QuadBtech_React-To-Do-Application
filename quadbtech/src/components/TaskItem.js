
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import './TaskStyles.css';

function TaskItem({ task, index }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <tr>
            <td>{index}</td>
            <td>{task.text}</td>
            <td>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </td>
        </tr>
    );
}

export default TaskItem;
