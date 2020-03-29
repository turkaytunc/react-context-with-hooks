import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const localItems = localStorage.getItem("storedTodos");

  const [todos, setTodos] = useState(localItems ? JSON.parse(localItems) : []);

  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, content) => {
    setTodos([...todos, { title, content, id: uuid() }]);
  };
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export const add = (num1, num2) => num1 + num2;

export default TodoContextProvider;
