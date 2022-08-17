import React from 'react'
import CompletedTodo from './CompletedTodo'
const CompletedTasks = ({todos}) => {
  return (
    todos.map((elem) => {
      if(elem.isFinished === true){
        return (
          <CompletedTodo key={elem.id} elem={elem}/>

        )
      }
    })
  )
}

export default CompletedTasks
