import axios from "axios";

const apiEndpoint = "http://localhost:3000/todos/";

export const getTodos = async () => await axios.get(apiEndpoint);

export const deleteTodo = async (id) =>
  await axios.delete(`${apiEndpoint}${id}`);

export const addTodo = async (data) => await axios.post(apiEndpoint, data);

export const updateTodo = async (id, updatedTodo) =>
  await axios.patch(`${apiEndpoint}${id}`, updatedTodo);
