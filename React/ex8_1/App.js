import React from 'react';

class App extends React.Component {
  state = { favoriteColor: 'blue' };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'red' });
    }, 1000);
  }
  componentDidUpdate() {
    const div = document.querySelector('[id="5"]');
    div.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color Is:{this.state.favoriteColor}</h1>
        <div id={5}></div>
      </div>
    );
  }
}
export default App;
