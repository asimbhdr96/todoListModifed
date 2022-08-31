import React from 'react'

import ActiveTodo from './ActiveTodo'
const ActiveTasks = ({todos}) => {


  return (


      todos?.map((elem) => {
        if(elem.isFinished === false){
          return (

          <ActiveTodo key={elem.id} elem={elem}/>
          )
        }
      })




  )
}

export default ActiveTasks
