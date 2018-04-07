class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodos = this.handleAddTodos.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleAddTodos = this.handleAddTodos.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      title: "This is a todo app",
      subTitle: "Hello there!",
      todos: props.todos
    };
  }

  //handleDeleteTodos
  handleDeleteTodos() {
    this.setState(() => ({ todos: [1, 2, 3] }));
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
        <Header title={this.state.title} subTitle={this.state.subTitle} />
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
  todos: []
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

// stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

// class ActionButton extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// stateless functional component
const ActionButton = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <ol>
//         {this.props.todos.map((todo, index) => {
//           return <li key={index}>{todo}</li>;
//         })}
//       </ol>
//     );
//   }
// }

const Todos = props => {
  return (
    <ol>
      {props.todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}
            <button
              onClick={e => {
                props.handleDeleteTodo(todo);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ol>
  );
};

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
    this.setState(() => ({ error: error }));
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

// class RemoveAllTodo extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <button onClick={this.props.handleDeleteTodos}>Remove All Todos</button>
//     );
//   }
// }

const RemoveAllTodo = props => {
  console.log("In here!");
  return <button onClick={props.handleDeleteTodos}>Remove All Todos</button>;
};

const jsx = (
  <div>
    <TodoApp todos={["Test1", "Test2", "Test3"]} />
    {/* <TodoApp /> */}
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
    this.setState(prevState => ({ visibility: !prevState.visibility }));
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
