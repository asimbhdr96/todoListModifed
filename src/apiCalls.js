
  const BASE_URL = "http://localhost:3000";
  const todoPath = "todos";

  export const getTodos = () => {
    const todosEndPoint = [BASE_URL, todoPath].join("/");
    return fetch(todosEndPoint).then((response) => {
      return response.json();
    });
  };

  export const deleteTodo = (id) => {
    const deleteTodoEndPoint = [BASE_URL, todoPath, `${id}`].join("/");
    return fetch(deleteTodoEndPoint, { method: "DELETE" }).then(() =>
      console.log("deleted")
    );
  };

  export const addTodo = (data) => {
    const addTodoEndPoint = [BASE_URL, todoPath].join("/");
    return fetch(addTodoEndPoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  export const updateTodo = (id, data) => {
    const updateTodoEndPoint = [BASE_URL, todoPath, `${id}`].join("/");
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(updateTodoEndPoint, options).then((response) =>
      response.json()
    );
  };

