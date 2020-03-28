import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./todo-form.scss";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todoTitle, todoContent);
    setTodoTitle("");
    setTodoContent("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div>
        <label htmlFor="todoTitle" style={{ display: "inline" }}>
          Title
        </label>
        <input
          name="todoTitle"
          className="todo-form-input"
          type="text"
          required
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value.slice(0, 20))}
        ></input>
      </div>
      <div>
        <label htmlFor="todoContent" style={{ display: "inline" }}>
          Content
        </label>
        <input
          name="todoContent"
          className="todo-form-input"
          type="text"
          required
          value={todoContent}
          onChange={event => setTodoContent(event.target.value.slice(0, 140))}
        ></input>
      </div>
      <button className="todo-form-button" type="submit">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
