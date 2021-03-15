import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { box: true };
  }

  render() {
    if (this.state.box) {
      return (
        <div>
          <button onClick={() => this.setState({ box: !this.state.box })}>
            add/hide
          </button>
          <div
            style={{
              width: '100px',
              height: '250px',
              backgroundColor: 'lightblue',
            }}
          ></div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ box: !this.state.box })}>
            add/hide
          </button>
          <div
            style={{
              width: '100px',
              height: '250px',
              backgroundColor: 'lightblue',
              visibility: 'hidden',
            }}
          ></div>
        </div>
      );
    }
  }
}
export default App;
