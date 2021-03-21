import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    url: 'https://api.chucknorris.io/jokes/',
    joke: '',
    categories: [],
  };
  getRandomJoke = async (name = 'random') => {
    let joke = (await axios.get(`${this.state.url}${name}`)).data.value;
    this.setState({ joke: joke });
  };
  getCategories = async () => {
    const categories = await (await axios.get(`${this.state.url}categories`))
      .data;
    this.setState({ categories: categories });
  };
  componentDidMount = () => {
    this.getCategories();
  };
  getJokeCat = async (cat) => {
    const joke = await (
      await axios.get(`${this.state.url}random?category=${cat}`)
    ).data.value;
    this.setState({ joke: joke });
  };
  render() {
    return (
      <>
        <h1>{this.state.joke}</h1>
        <button onClick={() => this.getRandomJoke()}>random joke</button>

        {this.state.categories.map((cat) => (
          <button onClick={() => this.getJokeCat(cat)}>{cat}</button>
        ))}
      </>
    );
  }
}
export default App;
