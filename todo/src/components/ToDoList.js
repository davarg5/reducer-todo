import React, { useState, useReducer } from 'react';
import reducer, {initialState} from '../reducers';
import actions from './../actions';


const ToDoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');

    const handleAdd = e => {
        e.preventDefault();
        dispatch(actions.addTodo(input)) 
        setInput('');
    }

    const handleClear = () => {
        dispatch(actions.clearTodo());
    }

    const handleChanges = e => {
        setInput(e.target.value);
    }

    const handleToggle = e => {
        dispatch(actions.toggleTodo(state.id))
    }

    console.log(state);
    return (
        <div>
            {state.tasks.map(task => {
                return (
                    <div className={`item${task.completed ? ' completed' : ''}`} onClick={() => dispatch(actions.toggleTodo(task.id))}>
                        {task.item}
                    </div>
                )
            })}

            <div className='formBottom'>
            <form onSubmit={handleAdd}>
                <input
                type='text'
                value={input}
                onChange={handleChanges}
                />
                <button>Add</button>

            </form>

            <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )

}

export default ToDoList;