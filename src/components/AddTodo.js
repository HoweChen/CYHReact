import React from "react";

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

export { AddTodo as default };
