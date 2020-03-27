import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    {
      title: "todo1ggggggggggggggggggggg",
      content:
        "ilk deneme icerigiilk deneme icerigiilk deneme icerigiilk deneme icerigi",
      id: 1
    },
    {
      title: "todo2gggggggggggggggggggggg",
      content:
        "ikinci deneme icerigiikinci deneme icerigiikinci deneme icerigiikinci deneme icerigi",
      id: 2
    },
    {
      title: "todo3ggggggggggggggggggggggg",
      content:
        "ucuncu deneme icerigiucuncu deneme icerigiucuncu deneme icerigiucuncu deneme icerigiucuncu deneme icerigi",
      id: 3
    },
    {
      title: "todo4hhhhhhhhhhhhhhhh",
      content:
        "dorduncu deneme icerigidorduncu deneme icerigidorduncu deneme icerigi",
      id: 4
    }
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
