import React from 'react'
import { useState, useEffect } from 'react'
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
import { useSelector,useDispatch } from 'react-redux';
import {fetchTodos,createTodo,deleteTodo,updateTodo} from './actions/todos'

const App = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos)
  const [newTodo, setnewTodo] = useState({
    title : '',
    isFinished : false,
  })
  // const [todoList,setTodoList] = useState([]);

  useEffect(()=> {
    dispatch(fetchTodos())
  },[])
  console.log('asdasd',todoList.todos)

  const handleSubmit = () => {
    dispatch(createTodo(newTodo))
  }



  return (
    <div>
      <header className="top-header"><h1>ToDo List</h1>

      </header>
    <main className="main-container">
      <form className="input-container">
        <input className="todo-input" type="text" placeholder="Enter your Todo" value={newTodo.title} onChange={(e) => setnewTodo(prevState => ( {
          ...prevState,
          title : e.target.value
        }))}/>
      </form>
      <button type="submit" className="btn-submit" onClick={handleSubmit}>Submit</button>

    </main>
    <section className="tasks-container">


    <div className="active-tasks-container">
       <ActiveTasks todos = {todoList.todos} />
    </div>
    <div className="completed-tasks-container">
       <CompletedTasks todos = {todoList.todos}/>
    </div>





    </section></div>
  )
}

export default App
