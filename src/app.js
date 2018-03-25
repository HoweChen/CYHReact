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
var template = (
  <div>
    <h1>{Title.name}</h1>
    {Title.subTitle && <p>{Title.subTitle}</p>}
    {/* if this item exist and its length >0 it would be shown otherwise it would not */}
    {Title.item && Title.item.length > 0 ? (
      <ol>
        <li>{Title.item[0]}</li>
        <li>{Title.item[1]}</li>
      </ol>
    ) : (
      <p>You have no options</p>
    )}
  </div>
);

var User = {
  userName: "Howe Chen",
  userAge: "27",
  userLocation: "Macau City"
};
var templateTwo = (
  <div>
    <h1>{(User.userName ? User.userName : "Anonymous") + " is here!"}</h1>
    {User.userAge && User.userAge >= 18 && <p>Age: {User.userAge}</p>}
    {getLocation(User.userLocation)}
  </div>
);

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var todoAppRoot = document.getElementById("todoApp");
var personInfoRoot = document.getElementById("personInfo");

ReactDOM.render(template, todoAppRoot);
ReactDOM.render(templateTwo, personInfoRoot);
