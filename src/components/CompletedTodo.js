import React from 'react'

const CompletedTodo = ({elem}) => {
  return (
    <div key={elem.id} className="completed">
          <p id="li${todo?.id}">{elem?.title}</p>
          <div id="btn-div">
            <button className="edit-btn" name={elem?.id} id="editBtn">
              Edit
            </button>
            <button className="delete-btn" name={elem?.id} id="deleteBtn">
              Delete
            </button>
          </div>
        </div>
  )
}

export default CompletedTodo
