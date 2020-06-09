import React, { useState, useReducer } from 'react'
import Todo from './Todo'


export const TodoList = ({state, dispatch}) => {

const [newItemText, setNewItemText] = useState('')

const handleSubmit = e => {
    e.preventDefault()

}

const handleChanges = e => {
    setNewItemText(e.target.value)
}

console.log(state.todos)

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='task'
            placeholder='Add an item'
            value={newItemText}
            onChange={handleChanges}
            />
            
        </form>
        <p>
            {state.todos.map((todo) => ( 
                <Todo todo={todo} state={state} dispatch={dispatch} />
            ))}
        </p>
        <button className='todo-button' onClick={() => {
                dispatch({type: 'UPDATE_ITEMTEXT', payload: newItemText})
                setNewItemText('')
                
            }}> Add item</button>

            <button className='todo-button' onClick={() => {
                dispatch({type: 'UPDATE_ITEMSCLEARED'})
            }}>
                Delete Completed
            </button>
    </div>
)
}