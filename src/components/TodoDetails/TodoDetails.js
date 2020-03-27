import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./todo-details.scss";

const TodoDetails = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <li onClick={() => removeTodo(todo.id)} className="todo-details-li">
      <p className="todo-details-p todo-details-title">{todo.title}</p>
      <p className="todo-details-p todo-details-content">{todo.content}</p>
    </li>
  );
};

export default TodoDetails;
