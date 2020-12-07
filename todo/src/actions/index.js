export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';


const addTodo = (input) => {
    return({type:ADD_TODO, payload: input});
}

const toggleTodo = (id) => {
    return({type:TOGGLE_TODO, payload: id});
}

const clearTodo = () => {
    return({type:CLEAR_TODO});
}

export default {
    addTodo: addTodo,
    toggleTodo: toggleTodo,
    clearTodo: clearTodo
}