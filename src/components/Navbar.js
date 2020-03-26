import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1>Yapmaniz gereken toplam {todos.length} is kaldi!!</h1>
    </div>
  );
};

export default Navbar;
