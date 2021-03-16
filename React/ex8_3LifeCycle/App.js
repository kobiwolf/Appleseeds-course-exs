import React from 'react';
class App extends React.Component {
  state = { style: 'red' };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ style: 'blue', radios: 0 });
    }, 500);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState((preStyle) => {
        switch (preStyle.style) {
          case 'blue':
            return { style: 'green' };
          case 'green':
            return { style: 'yellow' };
          case 'yellow':
            return { style: 'pink' };
          default:
            return { radios: '50%' };
        }
      });
    }, 1000);
  }
  render() {
    return (
      <div
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: this.state.style,
          borderRadius: this.state.radios,
        }}
      ></div>
    );
  }
}
export default App;
