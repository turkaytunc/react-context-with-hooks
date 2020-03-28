import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./todo-details.scss";

const TodoDetails = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <li onClick={() => removeTodo(todo.id)} className="todo-details-li">
      <p className="todo-details-p todo-details-title">
        {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
      </p>
      <hr
        style={{
          width: "65%",
          margin: ".5rem 15%  .7rem 15%",
          border: "1px dashed aliceblue"
        }}
      ></hr>
      <p className="todo-details-p todo-details-content">
        {todo.content.charAt(0).toUpperCase() + todo.content.slice(1)}
      </p>
    </li>
  );
};

export default TodoDetails;
