
const storedTasks = localStorage.getItem('tasks');
const initialState = {
    tasks: storedTasks ? JSON.parse(storedTasks) : []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTasks = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return {
                ...state,
                tasks: newTasks
            };
        case 'DELETE_TASK':
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        default:
            return state;
    }
};

export default reducer;

