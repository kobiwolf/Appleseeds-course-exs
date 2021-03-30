import React, { useState, useEffect } from 'react';
import Form from './componets/Form';
import axios from 'axios';
const url = `https://hn.algolia.com/api/v1/search?query=`;
const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('hooks');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      await setLoading(true);
      let { data } = await axios.get(url + term).catch((error) => {
        console.log(error);
      });
      data = data.hits.map(({ title, url, objectID }) => {
        return { title, url, id: objectID };
      });
      setData(data);
      setLoading(false);
    };
    fetching();
  }, [term]);

  const displayData = () => {
    const display = data.map((result) => {
      return (
        <li key={result.id}>
          <a href={result.url}>{result.title}</a>
        </li>
      );
    });
    return display;
  };
  return (
    <>
      <Form setTerm={setTerm} />
      {loading && <h2>loading...</h2>}
      <ul>{displayData()}</ul>
    </>
  );
};
export default App;
