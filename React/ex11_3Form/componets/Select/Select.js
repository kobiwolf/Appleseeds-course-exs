import React from 'react';

class TextInput extends React.Component {
  state = { value: this.props.value };
  render() {
    return (
      <div>
        {this.props.text}:
        <select
          onChange={async (e) => {
            e.preventDefault();
            await this.setState({ value: e.target.value });
            this.props.func(e.target.value, this.props.text);
          }}
          value={this.state.value || 'young'}
        >
          <option value="young">between 0-30</option>
          <option value="adult">between 31-60</option>
          <option value="old">between 61-90</option>
        </select>
      </div>
    );
  }
}

export default TextInput;
