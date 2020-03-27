import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./navbar.scss";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar-outer-div">
      <h1 className="navbar-div-h1">TodoApp with hooks-context</h1>
      <h5 className="navbar-div-h5">
        Yapmaniz gereken toplam {todos.length} is kaldi!!
      </h5>
    </div>
  );
};

export default Navbar;
