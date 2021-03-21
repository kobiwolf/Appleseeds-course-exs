import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      style={{ border: '1px solid black', textAlign: 'center' }}
    >
      <h1>{props.person.name}</h1>
      <h2>{props.person.birthday}</h2>
      <h2>{props.person.favoriteFoods.meats.join(',')}</h2>
      <h2>{props.person.favoriteFoods.fish.join(',')}</h2>
    </div>
  );
}
export default Card;
