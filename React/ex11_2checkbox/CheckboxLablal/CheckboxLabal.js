import React from 'react';

export default class CheckboxLabal extends React.Component {
  state = { text: '' };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            e.preventDefault();
            return this.props.func(true);
          }}
          checked={this.props.checked}
        ></input>
        {this.props.text}
      </div>
    );
  }
}
