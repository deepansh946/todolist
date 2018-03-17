import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoList from "./TodoList";

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
