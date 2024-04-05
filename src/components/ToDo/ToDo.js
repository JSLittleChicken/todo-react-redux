import React from 'react';
import ToDoForm from '../ToDoForm/ToDoForm';
import TaskList from '../TaskList/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleDone } from '../../features/tasks/tasksSlice';

export default function ToDo() {
    const tasks = useSelector(state => state.tasks);
    
    const dispatch = useDispatch();

    const sortedTasks = tasks.slice().sort((a, b) => {
        if (a.isDone === b.isDone) {
            return a.id - b.id;
        }
        return b.isDone ? 1 : -1;
    });

    const handleToggleDone = (id) => {
        dispatch(toggleDone(id));
    }

    const handleAddTask = (name) => {
        dispatch(addTask(name));
    };


    return (
        <div>
            <h1>My Todo List</h1>
            <TaskList tasks={sortedTasks} toggleDone={handleToggleDone} />
            <ToDoForm addTask={handleAddTask} />
        </div>
    );
}