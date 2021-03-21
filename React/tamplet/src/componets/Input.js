import React from 'react';

class Input extends React.Component {
  state = { value: '' };
  render() {
    return (
      <form>
        <input
          onChange={async (e) => {
            await this.setState({ value: e.target.value });
            this.props.func(this.state.value);
          }}
          value={this.state.value}
        ></input>
      </form>
    );
  }
}
export default Input;
