import React from "react";

class AddTodo extends React.Component {
  state = {
    error: undefined
  };
  constructor(props) {
    super(props);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.state={
    //   error:undefined
    // }
  }

  onFormSubmit = e => {
    e.preventDefault();
    const todo = e.target.elements.option.value.trim();
    const error = this.props.handleAddTodos(todo);
    this.setState(() => ({ error: error }));
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-todo-error">{this.state.error}</p>
        )}
        <form className="add-todo" onSubmit={this.onFormSubmit}>
          <input type="text" name="option" className="add-todo__input" />
          <button className="button">Add todo</button>
        </form>
      </div>
    );
  }
}

export { AddTodo as default };
