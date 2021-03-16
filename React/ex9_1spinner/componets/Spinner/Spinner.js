import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
  state = {};

  render() {
    return <div className={`noround ${this.props.color}`}></div>;
  }
}
Spinner.defaultProps = {
  color: 'green',
};
export default Spinner;
