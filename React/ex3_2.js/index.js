import React from 'react';
import ReactDOM from 'react-dom';
const target = document.querySelector('#root');
ReactDOM.render(
  React.createElement(
    'div',
    { style: { width: '500px', height: '500px', border: '1px solid black' } },
    React.createElement('form', {}, [
      React.createElement('h1', {}, 'HOW DO YOU LIKE FRONT END?'),
      React.createElement(
        'label',
        { style: { display: 'block', htmlFor: 'input', display: 'block' } },
        'how much you love front end?'
      ),
      React.createElement('input', {
        style: {
          display: 'block',
        },
        type: 'range',
        id: 'input',
      }),
      React.createElement(
        'label',
        { htmlFor: 'input2' },
        "what's your favorite feature in JS?"
      ),
      React.createElement('input', {
        style: {
          display: 'block',
        },
        id: 'input2',
        type: 'text',
      }),
    ])
  ),
  target
);
