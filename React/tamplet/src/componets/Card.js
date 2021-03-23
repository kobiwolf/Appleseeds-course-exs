import React from 'react';
function Card(props) {
  return (
    <>
      <h1>{props.product.title}</h1>
      <img src={props.product.imageUrl} alt={props.product.title} />
      <h2>price:{props.product.price}</h2>
      <h2>size:{props.product.size}</h2>
      <h2>id:{props.product.id}</h2>
    </>
  );
}
export default Card;
