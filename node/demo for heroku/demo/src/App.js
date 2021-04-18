import { useState } from 'react';
import './App.css';
import axios from 'axios';

const path = '/api/joke';
function App() {
  const [joke, setJoke] = useState('');
  const getjoke = () => {
    axios.get(path).then((respone) => setJoke(respone.data.value));
    // const data = await axios.get(path);
    // console.log(data);
    // setJoke(data.data.value);
  };
  return (
    <div className="App">
      <button onClick={getjoke}></button>
      {joke && <div>{joke}</div>}
    </div>
  );
}

export default App;
