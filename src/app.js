class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class ActionButton extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todos.map(todo => {
          return <li key={this.props.todos.indexOf(todo)}>{todo}</li>;
        })}
      </ol>
      // <div>
      //   {this.props.todos.map(todo => {
      //     return <p key={this.props.todos.indexOf(todo)}>{todo}</p>;
      //   })}
      // </div>
    );
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.option.value.trim();
    const error = this.props.handleAddTodos(todo);
    this.setState(() => {
      return {
        error: error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}

class RemoveAllTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodos = this.handleDeleteTodos.bind(this);
  }

  handleDeleteTodos(e) {
    // e.preventDefault();
    this.props.handleDeleteTodos;
  }

  render() {
    return <button onClick={this.handleDeleteTodos}>Remove all todos</button>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodos = this.handleAddTodos.bind(this);
    this.handleAddTodos = this.handleAddTodos.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      title: "This is a todo app",
      subTitle: "Hello there!",
      todos: ["test1", "test2", "test3"]
    };
  }

  //handleDeleteTodos
  handleDeleteTodos() {
    console.log("here");
    this.setState(() => {
      return {
        todos: []
      };
    });
  }

  handleAddTodos(todo) {
    if (!todo) {
      alert("Please input something before adding!");
      return "Enter invalid value.";
    } else if (this.state.todos.indexOf(todo) != -1) {
      return "This item is already in the todo list.";
    } else {
      this.setState(prevState => {
        return {
          todos: prevState.todos.concat([todo])
        };
      });
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
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <ActionButton
          hasOptions={this.state.todos.length > 0}
          todos={this.state.todos}
          handlePick={this.handlePick}
        />
        <Options todos={this.state.todos} />
        <AddTodo
          handleAddTodos={this.handleAddTodos}
          todos={this.state.todos}
        />
        <RemoveAllTodo handleDeleteTodos={this.handleDeleteTodos} />
      </div>
    );
  }
}

const jsx = (
  <div>
    <TodoApp />
  </div>
);

class InvisibleApp extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      text: "Hello and fuck you",
      visibility: false
    };
  }
  buttonClick() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    const text = "Hello and fuck you";
    let visibility = false;
    return (
      <div>
        <h1>Invisible App</h1>
        <button onClick={this.buttonClick}>
          {this.state.visibility === true ? "Hide" : "Show"} detail
        </button>
        <h2>{this.state.visibility === true ? this.state.text : ""}</h2>
      </div>
    );
  }
}

ReactDOM.render(jsx, document.getElementById("todoApp"));
ReactDOM.render(<InvisibleApp />, document.getElementById("invisibleApp"));
