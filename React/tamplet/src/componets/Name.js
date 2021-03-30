import React from 'react';

function Name(props) {
  return (
    <>
      {props.names.map((name, i) => (
        <h2 key={i}>{name}</h2>
      ))}
    </>
  );
}
export default Name;
