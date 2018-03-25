"use strict";

console.log("====================================");
console.log("App.js is running!");
console.log("====================================");

// JSX - Javascript XML
var Title = {
  name: "This is JSX from app.js",
  subTitle: "Here are some info",
  item: ["Item 1", "Item 2"]
};
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
  Title.item && Title.item.length > 0 ? React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      Title.item[0]
    ),
    React.createElement(
      "li",
      null,
      Title.item[1]
    )
  ) : React.createElement(
    "p",
    null,
    "You have no options"
  )
);

var User = {
  userName: "Howe Chen",
  userAge: "27",
  userLocation: "Macau City"
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

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
var todoAppRoot = document.getElementById("todoApp");
var personInfoRoot = document.getElementById("personInfo");

ReactDOM.render(template, todoAppRoot);
ReactDOM.render(templateTwo, personInfoRoot);
