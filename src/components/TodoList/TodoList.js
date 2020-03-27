import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetails from "../TodoDetails/TodoDetails";
import "./todo-list.scss";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list-div">
      <ul className="todo-list-ul">
        {todos.map(todo => {
          return <TodoDetails todo={todo} key={todo.id}></TodoDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div style={{ fontSize: "2rem", textAlign: "center", margin: "1rem 0" }}>
      Congratulations! Nothing left to do!!
    </div>
  );
};

export default TodoList;
