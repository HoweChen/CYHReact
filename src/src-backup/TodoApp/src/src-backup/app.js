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
  return <button onClick={props.handleDeleteTodos}>Remove All Todos</button>;
};

const jsx = (
  <div>
    {/* <TodoApp todos={["Test1", "Test2", "Test3"]} /> */}
    <TodoApp />
  </div>
);

ReactDOM.render(jsx, document.getElementById("todoApp"));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const result = parseInt(localStorage.getItem("count"));
    if (!isNaN(result)) {
      this.setState(() => ({ count: result }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
      console.log("Save succeed!");
    }
  }
  handlePlusOne() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  handleMinusOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  handleReset() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("countApp"));
