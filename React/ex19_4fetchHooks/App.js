import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const url = 'https://api.chucknorris.io/jokes/';
  const [joke, setJoke] = useState('');
  const [categors, setCategors] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(url + 'categories');
      setCategors(data);
    };
    getCategories();
  }, []);
  const getRandomJoke = async () => {
    const {
      data: { value },
    } = await axios.get(url + 'random');
    setJoke(value);
  };
  const getJokeCat = async (cat) => {
    const joke = await (await axios.get(`${url}random?category=${cat}`)).data
      .value;
    setJoke(joke);
  };
  return (
    <>
      <h1>{joke}</h1>
      <button onClick={getRandomJoke}>random joke</button>
      {categors.map((cat) => {
        return <button onClick={() => getJokeCat(cat)}>{cat}</button>;
      })}
    </>
  );
}

export default App;
