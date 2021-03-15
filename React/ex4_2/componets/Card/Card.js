import React from 'react';
import './Card.css';
import Link from '../Links/Link.js';
function Card(props) {
  return (
    <div className="card">
      <img src={props.pic}></img>
      <h1>{props.title}</h1>
      <div className="linksDiv">
        <Link text={props.texta1} />
        <Link text={props.texta2} />
      </div>
    </div>
  );
}

export default Card;
