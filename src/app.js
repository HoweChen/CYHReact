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
  handlePick() {
    // let decision = Math.floor(Math.random() * this.props.todos.length);
    // alert("You should do:" + (decision + 1) + ". " +
    //   this.props.todos[decision]);
    alert("fuck you");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
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
    );
  }
}

class AddTodo extends React.Component {
  onFormSubmit(event) {
    event.preventDefault();
    const job = event.target.elements.option.value;

    if (job) {
      alert(job);
    }
  }
  render() {
    return (
      <div>
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
    this.removeAllTodo = this.removeAllTodo.bind(this);
    this.state = {
      todos: this.props.todos
    };
  }
  removeAllTodo() {
    this.setState({});
  }

  render() {
    return <button onClick={this.removeAllTodo}>Remove all todos.</button>;
  }
}

class TodoApp extends React.Component {
  render() {
    const title = "This is a todo app";
    const subTitle = "Hello there!";
    const todos = ["test1", "test2", "test3"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <ActionButton jobs={todos} />
        <AddTodo />
        <RemoveAllTodo todos={todos} />
        <Options todos={todos} />
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
    if (this.state.visibility === false) {
      this.setState(prevState => {
        return {
          visibility: true
        };
      });
    } else {
      this.setState(() => {
        return {
          visibility: false
        };
      });
    }
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
