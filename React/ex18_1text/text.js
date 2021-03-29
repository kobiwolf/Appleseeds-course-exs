import React, { useState } from 'react';

const Text = (props) => {
  const [length, setLength] = useState(props.length);
  const [text, setText] = useState(props.text);
  const onClickEvent = () => {
    const arr = text.split(' ');
    arr.splice(length);
    setText(arr.join(' '));
  };
  const displayButton = () => {
    if (text === props.text)
      return <button onClick={() => onClickEvent()}>show less</button>;
    return <button onClick={() => setText(props.text)}>show more</button>;
  };
  return (
    <>
      <h2>{text}</h2>
      {displayButton()}
    </>
  );
};
export default Text;
