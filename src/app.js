import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";

const jsx = (
  <div>
    {/* <TodoApp todos={["Test1", "Test2", "Test3"]} /> */}
    <TodoApp />
  </div>
);

ReactDOM.render(jsx, document.getElementById("todoApp"));
