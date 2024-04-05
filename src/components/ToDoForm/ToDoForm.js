import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWarning } from '../../features/tasks/formSlice';

function ToDoForm({ addTask }) {
    const dispatch = useDispatch();
    const warning = useSelector(state => state.warning.warn);
    
    const [taskName, setTaskName] = useState('');

    const handleToggleWarning = (warning) => {
        dispatch(toggleWarning(warning));
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (!taskName) {
            handleToggleWarning('empty');
            return;
        }
        addTask(taskName);
        setTaskName('');
    }

    return (
        <form onSubmit={handleSubmit} className={warning}>
            <button>+</button>
            <input
                type="text"
                value={taskName}
                onChange={ev => { setTaskName(ev.target.value); handleToggleWarning('') }}
                placeholder={!warning ? "Your next task..." : "Please enter something"}
            />
        </form>
    );
}
export default ToDoForm;