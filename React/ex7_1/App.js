import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ counter: (this.state.counter += 1) })}
        >
          adding
        </button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}
export default App;
