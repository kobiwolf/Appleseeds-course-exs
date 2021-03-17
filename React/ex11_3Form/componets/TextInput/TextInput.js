import React from 'react';

class TextInput extends React.Component {
  state = { value: this.props.value };
  textarea() {
    return (
      <textarea
        onChange={async (e) => {
          e.preventDefault();
          await this.setState({ value: e.target.value });
          this.props.func(e.target.value, this.props.text);
        }}
        value={this.state.value}
      ></textarea>
    );
  }
  input() {
    return (
      <input
        type="text"
        id={this.props.text}
        onChange={async (e) => {
          e.preventDefault();
          await this.setState({ value: e.target.value });
          this.props.func(e.target.value, this.props.text);
        }}
        value={this.state.value}
      ></input>
    );
  }
  render() {
    return (
      <div>
        <label htmlFor={this.props.text}>{this.props.text}:</label>
        {this.props.type ? this.textarea() : this.input()}
      </div>
    );
  }
}

export default TextInput;
