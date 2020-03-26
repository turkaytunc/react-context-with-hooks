import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoContextProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";

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
