import React from 'react';
import './Card.css';
import Link from '../Links/Link.js';
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.pic}></img>
        <h1>{this.props.title}</h1>
        <div className="linksDiv">
          <Link text={this.props.texta1} />
          <Link text={this.props.texta2} />
        </div>
      </div>
    );
  }
}

export default Card;
