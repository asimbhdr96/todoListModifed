import React from 'react'
import { useState } from 'react'
const ActiveTodo = ({elem}) => {
  const [editClicked,setEditClicked] = useState(false)
  const [data,setData] = useState('');

  console.log(data)
  return (
    <div key={elem.id} className="active">
            {editClicked ? <input value={elem.title} onChange={(e) => elem.title = e.target.value}/> : <p id="li${todo?.id}">{elem?.title}</p>}

            <div id="btn-div">
              <button className="edit-btn" name={elem?.id} id="editBtn" onClick={() => setEditClicked(!editClicked)}>
                Edit
              </button>
              <button className="delete-btn" name={elem?.id} id="deleteBtn">
                Delete
              </button>
            </div>
          </div>
  )
}

export default ActiveTodo
