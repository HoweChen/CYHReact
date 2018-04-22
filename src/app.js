import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import ActionButton from "./components/ActionButton";
import RemoveAllTodo from "./components/RemoveAllTodo";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodos = this.handleAddTodos.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleAddTodos = this.handleAddTodos.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    console.log("====================================");
    console.log("fetching data");
    console.log("====================================");
    console.log(this.state.todos);
    const json = localStorage.getItem("todos");
    if (json) {
      // if this json exist instead of null, than we will read from it, otherwise don't
      const todos = JSON.parse(json); // this is an array
      this.setState(() => ({ todos: todos }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json_array = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json_array);
      console.log("====================================");
      console.log("saving data");
      console.log("====================================");
    }
  }
  componentWillUnmount() {
    console.log("====================================");
    console.log("componentWillUnmount!");
    console.log("====================================");
  }
  //handleDeleteTodos
  handleDeleteTodos() {
    localStorage.clear();
  }

  handleDeleteTodo(todoToRemove) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todoToRemove !== todo)
    }));
  }

  handleAddTodos(todo) {
    if (!todo) {
      alert("Please input something before adding!");
      return "Enter invalid value.";
    } else if (this.state.todos.indexOf(todo) != -1) {
      return "This item is already in the todo list.";
    } else {
      this.setState(prevState => ({ todos: prevState.todos.concat([todo]) }));
    }
  }

  handlePick() {
    let decision = Math.floor(Math.random() * this.state.todos.length);
    alert(
      "You should do:" + (decision + 1) + ". " + this.state.todos[decision]
    );
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subTitle={this.props.subTitle} />
        <ActionButton
          hasOptions={this.state.todos.length > 0}
          handlePick={this.handlePick}
        />
        <Todos
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <AddTodo
          handleAddTodos={this.handleAddTodos}
          todos={this.state.todos}
        />
        <RemoveAllTodo handleDeleteTodos={this.handleDeleteTodos} />
      </div>
    );
  }
}

TodoApp.defaultProps = {
  title: "This is a todo app",
  subTitle: "Hello there!"
};

const jsx = (
  <div>
    {/* <TodoApp todos={["Test1", "Test2", "Test3"]} /> */}
    <TodoApp />
  </div>
);

ReactDOM.render(jsx, document.getElementById("todoApp"));
