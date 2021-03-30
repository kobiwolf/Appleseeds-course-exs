import React, { useEffect, useState } from 'react';
import CheckBox from './componets/CheckBox';

let dataArr = ['one', 'two', 'three', 'four', 'five'];
let startData = [
  ...dataArr.map((text, i) => {
    return { id: i, title: text, finish: false };
  }),
];
const App = () => {
  const [data, setData] = useState(startData);
  console.log(startData);
  const updateFinish = (name) => {
    const argu = data.map((cube) => {
      if (cube.title === name)
        return { title: cube.title, finish: !cube.finish };
      return cube;
    });
    setData(argu);
  };
  const deleteChecked = () => {
    const done = data.filter((item) => {
      if (!item.finish) return item;
    });
    setData(done);
  };
  const resetButton = () => {
    setData(startData);
  };
  return (
    <>
      <ul>
        {data.map((cube) => (
          <CheckBox
            key={cube.id}
            text={cube.title}
            updateFinish={updateFinish}
            finish={cube.finish}
          />
        ))}
      </ul>
      <button onClick={deleteChecked}>delete</button>
      <button onClick={resetButton}>reset</button>
    </>
  );
};
export default App;

function window() {
  const [state, setState] = useState(0);
  console.time('simple');
  for (let i = 0; i < 10000; i++) {
    console.log(state);
  }
  console.timeEnd('simple');

  console.time('effect');
  for (let i = 0; i < 10000; i++) {
    useEffect(() => {
      console.log(state);
    });
  }
  console.timeEnd('effect');

  setState(state + 1);
}
