import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return <li>{todo.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
