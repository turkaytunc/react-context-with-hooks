import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("initial");
  const [todoContent, setTodoContent] = useState("cont");

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todoTitle, todoContent);
    setTodoTitle("");
    setTodoContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={todoTitle}
        onChange={event => setTodoTitle(event.target.value.slice(0, 20))}
      ></input>
      <input
        type="text"
        required
        value={todoContent}
        onChange={event => setTodoContent(event.target.value.slice(0, 140))}
      ></input>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
