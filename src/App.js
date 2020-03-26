import React from "react";
import "./App.css";
import { TodoContext } from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="App">
      <TodoContext></TodoContext>
    </div>
  );
};

export default App;
