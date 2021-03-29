import React from 'react';
import TodoHooks from './componets/todoHooks';
const data = [
  { name: 'CSS', completed: true },
  { name: 'JavaScript', completed: true },
  { name: 'Learn React', completed: false },
  { name: 'Learn mongoDB', completed: false },
  { name: 'Learn Node JS', completed: false },
];
const App = () => {
  return (
    <>
      <TodoHooks data={data} />
    </>
  );
};
export default App;
