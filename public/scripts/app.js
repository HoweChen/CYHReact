"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.handleDeleteTodos = _this.handleAddTodos.bind(_this);
    _this.handleDeleteTodo = _this.handleDeleteTodo.bind(_this);
    _this.handleAddTodos = _this.handleAddTodos.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      title: "This is a todo app",
      subTitle: "Hello there!",
      todos: props.todos
    };
    return _this;
  }

  //handleDeleteTodos


  _createClass(TodoApp, [{
    key: "handleDeleteTodos",
    value: function handleDeleteTodos() {
      this.setState(function () {
        return { todos: [1, 2, 3] };
      });
    }
  }, {
    key: "handleDeleteTodo",
    value: function handleDeleteTodo(todoToRemove) {
      this.setState(function (prevState) {
        return {
          todos: prevState.todos.filter(function (todo) {
            return todoToRemove !== todo;
          })
        };
      });
    }
  }, {
    key: "handleAddTodos",
    value: function handleAddTodos(todo) {
      if (!todo) {
        alert("Please input something before adding!");
        return "Enter invalid value.";
      } else if (this.state.todos.indexOf(todo) != -1) {
        return "This item is already in the todo list.";
      } else {
        this.setState(function (prevState) {
          return { todos: prevState.todos.concat([todo]) };
        });
      }
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var decision = Math.floor(Math.random() * this.state.todos.length);
      alert("You should do:" + (decision + 1) + ". " + this.state.todos[decision]);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
        React.createElement(ActionButton, {
          hasOptions: this.state.todos.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Todos, {
          todos: this.state.todos,
          handleDeleteTodo: this.handleDeleteTodo
        }),
        React.createElement(AddTodo, {
          handleAddTodos: this.handleAddTodos,
          todos: this.state.todos
        }),
        React.createElement(RemoveAllTodo, { handleDeleteTodos: this.handleDeleteTodos })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

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
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      "h2",
      null,
      props.subTitle
    )
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
var ActionButton = function ActionButton(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should I do?"
    )
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

var Todos = function Todos(props) {
  return React.createElement(
    "ol",
    null,
    props.todos.map(function (todo, index) {
      return React.createElement(
        "li",
        { key: index },
        todo,
        React.createElement(
          "button",
          {
            onClick: function onClick(e) {
              props.handleDeleteTodo(todo);
            }
          },
          "Remove"
        )
      );
    })
  );
};

var AddTodo = function (_React$Component2) {
  _inherits(AddTodo, _React$Component2);

  function AddTodo(props) {
    _classCallCheck(this, AddTodo);

    var _this2 = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddTodo, [{
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      event.preventDefault();
      var todo = event.target.elements.option.value.trim();
      var error = this.props.handleAddTodos(todo);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add todo"
          )
        )
      );
    }
  }]);

  return AddTodo;
}(React.Component);

// class RemoveAllTodo extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <button onClick={this.props.handleDeleteTodos}>Remove All Todos</button>
//     );
//   }
// }

var RemoveAllTodo = function RemoveAllTodo(props) {
  console.log("In here!");
  return React.createElement(
    "button",
    { onClick: props.handleDeleteTodos },
    "Remove All Todos"
  );
};

var jsx = React.createElement(
  "div",
  null,
  React.createElement(TodoApp, { todos: ["Test1", "Test2", "Test3"] })
);

var InvisibleApp = function (_React$Component3) {
  _inherits(InvisibleApp, _React$Component3);

  function InvisibleApp(props) {
    _classCallCheck(this, InvisibleApp);

    var _this3 = _possibleConstructorReturn(this, (InvisibleApp.__proto__ || Object.getPrototypeOf(InvisibleApp)).call(this, props));

    _this3.buttonClick = _this3.buttonClick.bind(_this3);
    _this3.state = {
      text: "Hello and fuck you",
      visibility: false
    };
    return _this3;
  }

  _createClass(InvisibleApp, [{
    key: "buttonClick",
    value: function buttonClick() {
      this.setState(function (prevState) {
        return { visibility: !prevState.visibility };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var text = "Hello and fuck you";
      var visibility = false;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Invisible App"
        ),
        React.createElement(
          "button",
          { onClick: this.buttonClick },
          this.state.visibility === true ? "Hide" : "Show",
          " detail"
        ),
        React.createElement(
          "h2",
          null,
          this.state.visibility === true ? this.state.text : ""
        )
      );
    }
  }]);

  return InvisibleApp;
}(React.Component);

ReactDOM.render(jsx, document.getElementById("todoApp"));
ReactDOM.render(React.createElement(InvisibleApp, null), document.getElementById("invisibleApp"));
