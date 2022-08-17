import React from 'react'
import { useState, useEffect } from 'react'
import { getTodos, deleteTodo, updateTodo,addTodo } from './apiCalls';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';


const App = () => {
  const [newTodo, setnewTodo] = useState({
    title : '',
    isFinished : true,
  })
  const [todoList,setTodoList] = useState([]);

  useEffect(()=> {
    getTodos().then((data) => setTodoList(data))
  },[])


  const handleSubmit = () => {
    addTodo(newTodo).then((data) => {
      console.log(data)
      setTodoList([...todoList,data])
    })
    setnewTodo(prevState => ({
      ...prevState,
      title : '',
      isFinished : true
    }))
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
       <ActiveTasks todos={todoList} />
    </div>
    <div className="completed-tasks-container">
       <CompletedTasks todos={todoList}/>
    </div>





    </section></div>
  )
}

export default App
