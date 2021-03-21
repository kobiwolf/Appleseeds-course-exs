import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      style={{
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h1>{props.person.name}</h1>
      <img src={props.person.picture} alt="some pic" />
    </div>
  );
}
export default Card;
