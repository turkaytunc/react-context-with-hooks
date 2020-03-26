import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    { title: "todo1", content: "ilk deneme icerigi", id: 1 },
    { title: "todo2", content: "ikinci deneme icerigi", id: 2 }
  ]);

  const addTodo = (title, content) => {
    setTodos([...todos, { title, content, id: uuid() }]);
  };
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return <TodoContextProvider value={...todos, addTodo, removeTodo}>{props.childeren}</TodoContextProvider>;
};

export default TodoContextProvider;
