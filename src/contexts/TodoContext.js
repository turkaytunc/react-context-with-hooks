import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    { title: "todo1", content: "ilk deneme icerigi", id: 1 },
    { title: "todo2", content: "ikinci deneme icerigi", id: 2 },
    { title: "todo3", content: "ucuncu deneme icerigi", id: 3 },
    { title: "todo4", content: "dorduncu deneme icerigi", id: 3 }
  ]);

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

export default TodoContextProvider;
