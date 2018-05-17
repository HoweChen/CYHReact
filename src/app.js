import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <p>This is from my dashboard component</p>
    </div>
  );
};

const AddExpensePage = () => {
  return (
    <div>
      <p>This is from my add expense component</p>
    </div>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("todoApp"));
