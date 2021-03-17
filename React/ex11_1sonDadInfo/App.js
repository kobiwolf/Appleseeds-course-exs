import React from 'react';
import Button from './componets/Button/Button';

let arr = ['red', 'blue', 'green'];

class App extends React.Component {
  state = { color: '' };

  getinfo = (color) => {
    this.setState({ color: color });
  };
  render() {
    return (
      <div>
        {arr.map((color) => (
          <Button color={color} sendInfo={this.getinfo} />
        ))}
        <h1>The color you picked:{this.state.color}</h1>
      </div>
    );
  }
}
export default App;
