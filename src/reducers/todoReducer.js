import * as types from "../actions/types";

const initialState = {
  todos : [],

}
const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_TODOS:
      return {
        ...state, todos: action.payload,
      }

    case types.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case types.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          } else {
            return todo;
          }
        })
      };
    default :
      return {
        ...state
      }
  }
}

export default todoReducer;
