import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoDetails from "./TodoDetails";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div>
      <ul>
        {todos.map(todo => {
          return <TodoDetails todo={todo}></TodoDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div>Nothing to do!!</div>
  );
};

export default TodoList;
