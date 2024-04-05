import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        name: 'Сходити за покупками',
        isDone: true,
        id: 1
    },
    {
        name: 'Зробити домашнє завдання',
        isDone: false,
        id: 2
    },
    {
        name: 'Погратися з котом',
        isDone: true,
        id: 3
    },
    {
        name: 'Тренування',
        isDone: false,
        id: 4
    }
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                name: action.payload,
                isDone: false,
                id: state.length + 1
            };
            state.push(newTask);
        },
        toggleDone: (state, action) => {
            const taskId = action.payload;
            const task = state.find(task => task.id === taskId);
            if (task) {
                task.isDone = !task.isDone;
            }
        }
    }
});

export const { addTask, toggleDone } = tasksSlice.actions;
export default tasksSlice.reducer;