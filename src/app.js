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

const EditExpensePage = () => {
  return (
    <div>
      <p>This is from my edit expense component</p>
    </div>
  );
};

const HelpExpensePage = () => {
  return (
    <div>
      <p>This is from my help expense component</p>
    </div>
  );
};

const NotFoundPage = () => (
  <div>
    <p>Not found!</p>
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      {/* found the route url from top to bottom, so the bottom would be the 404 */}
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpExpensePage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("todoApp"));
