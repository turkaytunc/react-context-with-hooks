import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar></Navbar>
      </TodoContextProvider>
    </div>
  );
};

export default App;
