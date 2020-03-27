import React from "react";

const TodoDetails = ({ todo }) => {
  return (
    <li>
      <h4 style={{ display: "inline", marginRight: "1rem" }}>{todo.title}</h4>
      <p style={{ display: "inline" }}>{todo.content}</p>
    </li>
  );
};

export default TodoDetails;
