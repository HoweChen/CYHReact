"use strict";

console.log("====================================");
console.log("App.js is running!");
console.log("====================================");
// JSX - Javascript XML
var Title = {
  name: "This is JSX from app.js",
  subTitle: "Here are some info",
  items: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  console.log("====================================");
  console.log("Form Submitted");
  console.log(event);
  console.log(option);
  console.log("====================================");
  if (option) {
    Title.items.push(option);
    event.target.elements.option.value = "";
  }
  reRenderTemplateOne();
};
var makeDecision = function makeDecision() {
  var decision = Math.floor(Math.random() * Title.items.length);
  alert("You should do:" + (decision + 1) + ". " + Title.items[decision]);
};

var removeAllJobs = function removeAllJobs() {
  // this is just to clear an array
  Title.items.length = 0;
  reRenderTemplateOne();
};

var User = {
  userName: "Howe Chen",
  userAge: "27",
  userLocation: "Macau City"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    (User.userName ? User.userName : "Anonymous") + " is here!"
  ),
  User.userAge && User.userAge >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    User.userAge
  ),
  getLocation(User.userLocation)
);

var count = 0;
var addOne = function addOne() {
  count += 1;
  console.log("====================================");
  console.log("After addition: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};
var minusOne = function minusOne() {
  count -= 1;
  console.log("====================================");
  console.log("After subtraction: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};
var reset = function reset() {
  count = 0;
  console.log("====================================");
  console.log("After reset: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};

var todoAppRoot = document.getElementById("todoApp");
var personInfoRoot = document.getElementById("personInfo");
var countInfoRoot = document.getElementById("countInfo");

ReactDOM.render(templateTwo, personInfoRoot);
// ReactDOM.render(templateThree, countInfoRoot);

var reRenderTemplateOne = function reRenderTemplateOne() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      Title.name
    ),
    Title.subTitle && React.createElement(
      "p",
      null,
      Title.subTitle
    ),
    React.createElement(
      "p",
      null,
      "You still have: ",
      Title.items.length,
      " job/jobs to do!"
    ),
    React.createElement(
      "button",
      { onClick: removeAllJobs },
      "Remove all the jobs"
    ),
    React.createElement(
      "button",
      { disabled: Title.items.length === 0, onClick: makeDecision },
      "Help me with the decision!"
    ),
    Title.items && Title.items.length > 0 ? React.createElement(
      "div",
      { id: "todos" },
      React.createElement(
        "ol",
        null,
        Title.items.map(function (item) {
          return React.createElement(
            "li",
            { key: Title.items.indexOf(item) },
            item
          );
        })
      )
    ) : React.createElement(
      "p",
      null,
      "You have no options"
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );
  ReactDOM.render(template, todoAppRoot);
};

var reRenderTemplateThree = function reRenderTemplateThree() {
  var templateThree = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { id: "button-id", className: "button", onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(templateThree, countInfoRoot);
};
reRenderTemplateOne();
reRenderTemplateThree();
