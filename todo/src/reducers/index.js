import { ADD_TODO, TOGGLE_TODO, CLEAR_TODO } from './../actions';

export const initialState = {
    tasks: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },]
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return({...state, tasks: [...state.tasks, {item: action.payload, completed: false, id: Date.now()}]})
        case(TOGGLE_TODO):
            return({...state, tasks: state.tasks.map(task => {
                if(task.id === action.payload) {
                    return {...task, completed: !task.completed}
                }
                return task
            })})
        case(CLEAR_TODO):
            return ({...state, tasks: state.tasks.filter(task => {
                return (!task.completed);
            })})
        default:
            return (state);
    }
}

export default reducer;