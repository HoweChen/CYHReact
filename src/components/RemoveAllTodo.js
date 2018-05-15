import React from "react";

const RemoveAllTodo = props => {
  return (
    <button className="button button--link" onClick={props.handleDeleteTodos}>
      Remove All Todos
    </button>
  );
};

export default RemoveAllTodo;
