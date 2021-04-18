import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');
  const getjoke = async () => {
    const data = await axios.get('http://localhost:3001/');
    setJoke(data.data.value);
  };
  return (
    <div className="App">
      <button onClick={getjoke}></button>
      {joke && <div>{joke}</div>}
    </div>
  );
}

export default App;
