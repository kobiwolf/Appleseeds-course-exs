import React from 'react';
import './Link.css';
function Link(props) {
  return <a href={props.target}>{props.text}</a>;
}

export default Link;
