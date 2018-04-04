class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class ActionButton extends React.Component {
  handlePick () {
    // let decision = Math.floor(Math.random() * this.props.todos.length);
    // alert("You should do:" + (decision + 1) + ". " +
    //   this.props.todos[decision]);
    alert("fuck you");
  }

  render () {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>

    );
  }
}

class Options extends React.Component {
  render () {

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
  render () {
    return (
      <div>
        <form>Please input some tasks.</form>
      </div>
    );
  }
}

class RemoveAllTodo extends React.Component {
  removeAllTodo () {
    alert("fuck you again!");
  }

  render () {
    return (
      <button onClick={this.removeAllTodo}>Remove all todos.</button>
    );
  }
}

class TodoApp extends React.Component {
  render () {
    const title = "This is a todo app";
    const subTitle = "Hello there!";
    const todos = ["test1", "test2", "test3"];
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <ActionButton jobs={todos}/>
        <AddTodo/>
        <RemoveAllTodo/>
        <Options todos={todos}/>
      </div>
    );
  }
}

const jsx = (
  <div>
    <TodoApp/>
  </div>
);

ReactDOM.render(jsx, document.getElementById("todoApp"));
