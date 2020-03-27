import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./navbar.scss";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar-outer-div">
      <h1 className="navbar-div-h1">TodoApp with hooks-context</h1>
      <h3 className="navbar-div-h3">You have {todos.length} jobs to do!!</h3>
    </div>
  );
};

export default Navbar;
