import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import formReducer from '../features/tasks/formSlice';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    warning: formReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;