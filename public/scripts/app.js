'use strict';

console.log('====================================');
console.log('App.js is running!');
console.log('====================================');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  { id: 'SomeID' },
  'This is JSX from App.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);