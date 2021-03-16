import React from 'react';
import Spinner from './componets/Spinner/Spinner';
class App extends React.Component {
  state = { time: 0 };
  componentDidMount() {
    this.setState({ time: 5 });
  }
  lowerTime = () => {
    this.setState((oldState) => {
      return { time: oldState.time - 1 };
    });
  };
  componentDidUpdate() {
    this.state.time > 0 && setTimeout(this.lowerTime, 1000);
  }
  render() {
    return (
      <div>
        <div>{this.state.time}</div>
        {this.state.time > 0 && <Spinner color="blue" />}
        {this.state.time > 0 && <Spinner color="red" />}
        {this.state.time > 0 && <Spinner />}
      </div>
    );
  }
}
export default App;
