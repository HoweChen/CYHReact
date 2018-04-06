"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

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

var ActionButton = function (_React$Component2) {
  _inherits(ActionButton, _React$Component2);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
  }

  _createClass(ActionButton, [{
    key: "handlePick",
    value: function handlePick() {
      // let decision = Math.floor(Math.random() * this.props.todos.length);
      // alert("You should do:" + (decision + 1) + ". " +
      //   this.props.todos[decision]);
      alert("fuck you");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What should I do?"
        )
      );
    }
  }]);

  return ActionButton;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "ol",
        null,
        this.props.todos.map(function (todo) {
          return React.createElement(
            "li",
            { key: _this4.props.todos.indexOf(todo) },
            todo
          );
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddTodo = function (_React$Component4) {
  _inherits(AddTodo, _React$Component4);

  function AddTodo() {
    _classCallCheck(this, AddTodo);

    return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).apply(this, arguments));
  }

  _createClass(AddTodo, [{
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      event.preventDefault();
      var job = event.target.elements.option.value;

      if (job) {
        alert(job);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
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

var RemoveAllTodo = function (_React$Component5) {
  _inherits(RemoveAllTodo, _React$Component5);

  function RemoveAllTodo(props) {
    _classCallCheck(this, RemoveAllTodo);

    var _this6 = _possibleConstructorReturn(this, (RemoveAllTodo.__proto__ || Object.getPrototypeOf(RemoveAllTodo)).call(this, props));

    _this6.removeAllTodo = _this6.removeAllTodo.bind(_this6);
    _this6.state = {
      todos: _this6.props.todos
    };
    return _this6;
  }

  _createClass(RemoveAllTodo, [{
    key: "removeAllTodo",
    value: function removeAllTodo() {
      this.setState({});
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.removeAllTodo },
        "Remove all todos."
      );
    }
  }]);

  return RemoveAllTodo;
}(React.Component);

var TodoApp = function (_React$Component6) {
  _inherits(TodoApp, _React$Component6);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: "render",
    value: function render() {
      var title = "This is a todo app";
      var subTitle = "Hello there!";
      var todos = ["test1", "test2", "test3"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(ActionButton, { jobs: todos }),
        React.createElement(AddTodo, null),
        React.createElement(RemoveAllTodo, { todos: todos }),
        React.createElement(Options, { todos: todos })
      );
    }
  }]);

  return TodoApp;
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

    var _this8 = _possibleConstructorReturn(this, (InvisibleApp.__proto__ || Object.getPrototypeOf(InvisibleApp)).call(this, props));

    _this8.buttonClick = _this8.buttonClick.bind(_this8);
    _this8.state = {
      text: "Hello and fuck you",
      visibility: false
    };
    return _this8;
  }

  _createClass(InvisibleApp, [{
    key: "buttonClick",
    value: function buttonClick() {
      if (this.state.visibility === false) {
        this.setState(function (prevState) {
          return {
            visibility: true
          };
        });
      } else {
        this.setState(function () {
          return {
            visibility: false
          };
        });
      }
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
