import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Fetch(props) {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get('https://api.chucknorris.io/jokes/random', {
        cancelToken: cancelToken.token,
      })
      .then(({ data }) => {
        setJoke(data.value);
      })
      .catch((e) => console.log(e));
    return () => {
      cancelToken.cancel();
    };
  }, []);
  return <h2>{joke}</h2>;
}
