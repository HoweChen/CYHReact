import React from "react";

const Todos = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your todos:</h3>
      </div>
      {props.todos.length === 0 && (
        <p className="widget__message">Please add something todo!</p>
      )}
      {props.todos.map((todo, index) => {
        return (
          <div key={index} class="todo">
            <p className="todo__text">
              {index + 1}. {todo}
            </p>
            <button
              className="button button--link"
              onClick={e => {
                props.handleDeleteTodo(todo);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
