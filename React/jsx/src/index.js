import React from 'react';
import ReactDOM from 'react-dom';

const hi = 'hiii';
const App = () => <div>{hi + 'm'}</div>;

ReactDOM.render(<App />, document.querySelector('#root'));
