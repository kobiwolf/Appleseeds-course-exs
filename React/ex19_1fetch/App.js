import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://swapi.dev/api/films/1/';
const App = () => {
  const [data, setData] = useState({ title: '', director: '' });
  useEffect(() => {
    const fetchData = async () => {
      let respone = await axios.get(url);
      setData({ title: respone.data.title, director: respone.data.director });
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
      <h2>{data.director}</h2>
    </>
  );
};
export default App;
