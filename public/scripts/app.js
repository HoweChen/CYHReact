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
    _this.handleAddTodos = _this.handleAddTodos.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      title: "This is a todo app",
      subTitle: "Hello there!",
      todos: ["test1", "test2", "test3"]
    };
    return _this;
  }

  //handleDeleteTodos


  _createClass(TodoApp, [{
    key: "handleDeleteTodos",
    value: function handleDeleteTodos() {
      this.setState(function () {
        return {
          todos: []
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
          return {
            todos: prevState.todos.concat([todo])
          };
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
          todos: this.state.todos,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          todos: this.state.todos,
          handleAddTodos: this.handleDeleteTodos
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

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var ActionButton = function (_React$Component3) {
  _inherits(ActionButton, _React$Component3);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
  }

  _createClass(ActionButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            disabled: !this.props.hasOptions,
            onClick: this.props.handlePick
          },
          "What should I do?"
        )
      );
    }
  }]);

  return ActionButton;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "ol",
        null,
        this.props.todos.map(function (todo, index) {
          return React.createElement(
            "li",
            { key: index },
            todo
          );
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddTodo = function (_React$Component5) {
  _inherits(AddTodo, _React$Component5);

  function AddTodo(props) {
    _classCallCheck(this, AddTodo);

    var _this5 = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

    _this5.onFormSubmit = _this5.onFormSubmit.bind(_this5);
    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(AddTodo, [{
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      event.preventDefault();
      var todo = event.target.elements.option.value.trim();
      var error = this.props.handleAddTodos(todo);
      this.setState(function () {
        return {
          error: error
        };
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

var RemoveAllTodo = function (_React$Component6) {
  _inherits(RemoveAllTodo, _React$Component6);

  function RemoveAllTodo() {
    _classCallCheck(this, RemoveAllTodo);

    return _possibleConstructorReturn(this, (RemoveAllTodo.__proto__ || Object.getPrototypeOf(RemoveAllTodo)).apply(this, arguments));
  }

  _createClass(RemoveAllTodo, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return React.createElement(
        "button",
        { onClick: this.props.handleDeleteTodos },
        "Remove All Todos"
      );
    }
  }]);

  return RemoveAllTodo;
}(React.Component);

var jsx = React.createElement(
  "div",
  null,
  React.createElement(TodoApp, null)
);

var InvisibleApp = function (_React$Component7) {
  _inherits(InvisibleApp, _React$Component7);

  function InvisibleApp(props) {
    _classCallCheck(this, InvisibleApp);

    var _this7 = _possibleConstructorReturn(this, (InvisibleApp.__proto__ || Object.getPrototypeOf(InvisibleApp)).call(this, props));

    _this7.buttonClick = _this7.buttonClick.bind(_this7);
    _this7.state = {
      text: "Hello and fuck you",
      visibility: false
    };
    return _this7;
  }

  _createClass(InvisibleApp, [{
    key: "buttonClick",
    value: function buttonClick() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
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
