import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://restcountries.eu/rest/v2/all';
const App = () => {
  const [allData, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      let respone = await axios.get(url);
      respone = respone.data.map((country) => {
        return { name: country.name, id: country.alpha3Code };
      });
      setData(respone);
      setFilterData(respone);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const filtered = allData.filter((country) =>
      country.name.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilterData(filtered);
  }, [input, allData]);
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <ul>
        {filterData.map((country) => {
          return <li key={country.id}>{country.name}</li>;
        })}
      </ul>
    </>
  );
};
export default App;
