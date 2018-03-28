"use strict";

console.log("====================================");
console.log("App.js is running!");
console.log("====================================");
// JSX - Javascript XML
let Title = {
  name: "This is JSX from app.js",
  subTitle: "Here are some info",
  items: []
};

const onFormSubmit = event => {
  event.preventDefault();
  const option = event.target.elements.option.value;
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
const makeDecision = () => {
  let decision = Math.floor(Math.random() * Title.items.length);
  alert("You should do:" + (decision + 1) + ". " + Title.items[decision]);
};

const removeAllJobs = () => {
  // this is just to clear an array
  Title.items.length = 0;
  reRenderTemplateOne();
};

let User = {
  userName: "Howe Chen",
  userAge: "27",
  userLocation: "Macau City"
};

const getLocation = location => {
  if (location) {
    return <p>Location: {location}</p>;
  }
};
let templateTwo = (
  <div>
    <h1>{(User.userName ? User.userName : "Anonymous") + " is here!"}</h1>
    {User.userAge && User.userAge >= 18 && <p>Age: {User.userAge}</p>}
    {getLocation(User.userLocation)}
  </div>
);

let count = 0;
const addOne = () => {
  count += 1;
  console.log("====================================");
  console.log("After addition: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};
const minusOne = () => {
  count -= 1;
  console.log("====================================");
  console.log("After subtraction: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};
const reset = () => {
  count = 0;
  console.log("====================================");
  console.log("After reset: " + count);
  console.log("====================================");
  reRenderTemplateThree();
};

const todoAppRoot = document.getElementById("todoApp");
const personInfoRoot = document.getElementById("personInfo");
const countInfoRoot = document.getElementById("countInfo");

ReactDOM.render(templateTwo, personInfoRoot);
// ReactDOM.render(templateThree, countInfoRoot);

const reRenderTemplateOne = () => {
  let template = (
    <div>
      <h1>{Title.name}</h1>
      {Title.subTitle && <p>{Title.subTitle}</p>}
      {/* if this items exist and its length >0 it would be shown otherwise it would not */}
      <p>You still have: {Title.items.length} job/jobs to do!</p>
      <button onClick={removeAllJobs}>Remove all the jobs</button>
      <button disabled={Title.items.length === 0} onClick={makeDecision}>
        Help me with the decision!
      </button>
      {Title.items && Title.items.length > 0 ? (
        <div id="todos">
          <ol>
            {Title.items.map(item => {
              return <li key={Title.items.indexOf(item)}>{item}</li>;
            })}
          </ol>
        </div>
      ) : (
        <p>You have no options</p>
      )}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, todoAppRoot);
};

const reRenderTemplateThree = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button id="button-id" className="button" onClick={addOne}>
        +1
      </button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateThree, countInfoRoot);
};
reRenderTemplateOne();
reRenderTemplateThree();
