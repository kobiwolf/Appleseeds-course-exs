import React, { useState } from 'react';

const TodoHooks = ({ data }) => {
  const [items, setItem] = useState(data);
  async function buttonClick(name) {
    setItem([
      ...items.map((item, i) => {
        if (item.name === name) {
          return { name: items[i].name, completed: !items[i].completed };
        } else return item;
      }),
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
