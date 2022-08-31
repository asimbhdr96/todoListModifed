
  import axios from 'axios'


  const apiEndpoint =  'http://localhost:3000/todos/'

  export const getTodos = async () => await axios.get(apiEndpoint);
  // export const getTodos = () => {
  //   const todosEndPoint = [BASE_URL, todoPath].join("/");
  //   return fetch(todosEndPoint).then((response) => {
  //     return response.json();
  //   }).then((data)=>  console.log(data));
  // };



  export const deleteTodo = async (id) => await axios.delete(`${apiEndpoint}${id}`)
  // export const deleteTodo = (id) => {
  //   const deleteTodoEndPoint = [BASE_URL, todoPath, `${id}`].join("/");
  //   return fetch(deleteTodoEndPoint, { method: "DELETE" }).then(() =>
  //     console.log("deleted")
  //   );
  // };

  export const addTodo = async (data) => await axios.post(apiEndpoint, data)
  // export const addTodo = (data) => {
  //   const addTodoEndPoint = [BASE_URL, todoPath].join("/");
  //   return fetch(addTodoEndPoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((response) => response.json());
  // };


  export const updateTodo = async (id,updatedTodo) => await axios.patch(`${apiEndpoint}${id}`,updatedTodo)
  // export const updateTodo = (id, data) => {
  //   const updateTodoEndPoint = [BASE_URL, todoPath, `${id}`].join("/");
  //   const options = {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   return fetch(updateTodoEndPoint, options).then((response) =>
  //     response.json()
  //   );
  // };

