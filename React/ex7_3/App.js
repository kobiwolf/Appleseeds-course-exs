import React from 'react';
import Button from './componets/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  addFunc() {
    this.state.counter < 10 &&
      this.setState({ counter: (this.state.counter += 1) });
  }
  minusFunc() {
    this.state.counter > -10 &&
      this.setState({ counter: (this.state.counter -= 1) });
  }
  choseColor() {
    if (this.state.counter > 0) return { color: 'green' };
    else if (this.state.counter === 0) return { color: 'black ' };
    return { color: 'red ' };
  }
  render() {
    return (
      <div>
        <Button sign="+" func={this.addFunc.bind(this)}></Button>
        <p style={this.choseColor()}>{this.state.counter}</p>
        <Button sign="-" func={this.minusFunc.bind(this)}></Button>
      </div>
    );
  }
}
export default App;
