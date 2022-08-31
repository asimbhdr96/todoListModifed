import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,fetchTodos,updateTodo } from '../actions/todos'
const CompletedTodo = ({elem}) => {
  const dispatch = useDispatch();
  return (
    <div key={elem.id} className="completed">
          <p id="li${todo?.id}"  onClick={() => {
              dispatch(updateTodo(elem.id,{...elem, isFinished : !elem.isFinished}))
            }}>{elem?.title}</p>
          <div id="btn-div">

            <button className="delete-btn" name={elem?.id} id="deleteBtn" onClick={() => {
                dispatch(deleteTodo(elem.id))
                dispatch(fetchTodos())
              }}>
              Delete
            </button>
          </div>
        </div>
  )
}

export default CompletedTodo
