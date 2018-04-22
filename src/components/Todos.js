import React from "react";

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

export default Todos;