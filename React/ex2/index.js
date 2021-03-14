import React from 'react';
import ReactDOM from 'react-dom';

const data = ['hello', 'world'];
const num1 = 5;
const num2 = 6;
const string = 'I love React';
ReactDOM.render(
  <div>
    <p>{data.join(' ')}</p>
    <p>{`${num1}+${num2}=${num1 + num2}`}</p>
    <p>{`the length of the string is:${string.length}`}</p>
  </div>,
  document.querySelector('#root')
);
