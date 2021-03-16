import React from 'react';
import './Square.css';
class Square extends React.Component {
  style = {
    width: 0,
    height: this.props.width,
    backgroundColor: this.props.color,
  };
  render() {
    return (
      <div style={{ width: this.props.width }}>
        <div style={this.style} className="square"></div>
      </div>
    );
  }
}
export default Square;
