import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
  // return React.createElement('h1', null, 'Hello WOrld!');
  return <>
    <h1>Hello World!!</h1>
    <span>test</span>
  </>
};

ReactDOM.render(
  React.createElement(HelloWorld),
  document.querySelector('#root'),
  
);
