import React, { useState, useReducer } from 'react'

export default function Todo(props) {

    return(
        <div
        onClick={() => props.dispatch({type: 'UPDATE_ITEMCOMPLETED', payload: props.todo.id})}
        className={`todo${props.todo.completed ? " completed" : ''}`}
        // style={{backgroundColor:`#${props.bgColor}`}}
        >
        <p>{props.todo.item}</p>
{/* <div>{console.log(props.num)}</div> */}
    </div>
    )
}

