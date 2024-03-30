
import { createStore } from 'redux';
import reducer from './reducers';

const storedTasks = localStorage.getItem('tasks');
const initialState = {
    tasks: storedTasks ? JSON.parse(storedTasks) : []
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;
