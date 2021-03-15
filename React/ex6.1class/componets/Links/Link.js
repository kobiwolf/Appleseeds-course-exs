import React from 'react';
import './Link.css';
class Link extends React.Component {
  render(){
    return <a href={this.props.target}>{this.props.text}</a>;
  }


export default Link;
