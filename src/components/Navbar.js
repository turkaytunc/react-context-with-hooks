import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1
        style={{
          background: "#333",
          color: "aliceblue",
          padding: "3rem 1rem",
          marginBottom: "1rem"
        }}
      >
        TodoApp with hooks-context
      </h1>
      <h5>Yapmaniz gereken toplam {todos.length} is kaldi!!</h5>
    </div>
  );
};

export default Navbar;
