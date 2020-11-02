import React, { useState, useReducer } from 'react';
import reducer, {initialState} from './../reducers';


const ToDoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            {state.map(task => {
                return (
                    <div>
                        {task.item}
                    </div>
                )
            })}
        </div>
    )

}

export default ToDoList;