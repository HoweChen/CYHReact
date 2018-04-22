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

class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return `Hi, my name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
