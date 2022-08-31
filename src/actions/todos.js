import * as types from "./types";
import * as api from '../api/index.js'


export const fetchTodos = () => async (dispatch) => {
  try{
    const {data} = await api.getTodos()
    console.log(data)
      dispatch({
      type : types.FETCH_TODOS,
      payload : data
    })
  }catch(err){
    console.log(err)
  }
}

export const createTodo = (todo) => async(dispatch) => {
  try{
    const {data} = await api.addTodo(todo)
    dispatch({
      type : types.CREATE_TODO,
      payload : data,
    })
  }catch(err){
    console.log(err)
  }
}


export const deleteTodo = (id) => async (dispatch) => {
  try{
    const {data} = await api.deleteTodo(id)
    console.log('sadfsdf',data)
    dispatch({
      type : types.DELETE_TODO,
      payload : id
    })
  }catch(err){
    console.log(err)
  }
}


export const updateTodo = (id,post) => async (dispatch) => {
  try{
    const {data} = await api.updateTodo(id,post)
    dispatch({
      type : types.UPDATE_TODO,
      payload : data
    })
  }catch(err){
    console.log(err)
  }
}
