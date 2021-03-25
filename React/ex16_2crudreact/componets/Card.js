import React from 'react';
function Card(props) {
  return (
    <>
      <h1>{props.product.name}</h1>
      <img src={props.product.avatar} alt="avatar pic" />
    </>
  );
}
export default Card;
