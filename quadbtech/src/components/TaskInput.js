
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskStyles.css';

function TaskInput() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        if (text.trim() !== '') {
            dispatch(addTask(text));
            setText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                placeholder="Add a task..."
                value={text}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="task-input"
            />
            <button onClick={handleSubmit} className="add-button">Add Task</button>
        </div>
    );
}

export default TaskInput;

