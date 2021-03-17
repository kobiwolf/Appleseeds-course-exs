import React from 'react';

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.color, margin: '1rem' }}
      onClick={() => props.sendInfo(props.color)}
    >
      {props.color}
    </button>
  );
}
export default Button;
