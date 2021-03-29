import React, { useState } from 'react';

const TodoHooks = ({ data }) => {
  const [items, setItem] = useState(data);
  async function buttonClick(name) {
    const match = items.findIndex((item) => item.name === name);
    setItem([
      ...items.slice(0, match),
      { name: items[match].name, completed: !items[match].completed },
      ...items.slice(match + 1),
    ]);
  }
  function displayItem(item) {
    if (item.completed) {
      return (
        <>
          <h1 style={{ textDecoration: 'line-through' }}>{item.name}</h1>
          <div onClick={() => buttonClick(item.name)}>&#9745;</div>
        </>
      );
    } else {
      return (
        <>
          <h1>{item.name}</h1>
          <div onClick={() => buttonClick(item.name)}>&#9746;</div>
        </>
      );
    }
  }
  return (
    <>
      {items.map((item) => {
        return <>{displayItem(item)}</>;
      })}
    </>
  );
};
export default TodoHooks;
