import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TodoContextProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar></Navbar>
        <TodoList></TodoList>
      </TodoContextProvider>
    </div>
  );
};

export default App;
