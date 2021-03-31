import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Fetch from './componets/fetchData';

function App() {
  const [isFetch, setFetch] = useState(false);
  useEffect(() => {});
  return (
    <>
      <button
        onClick={() => {
          setFetch(!isFetch);
        }}
      >
        display
      </button>
      {isFetch && <Fetch />}
    </>
  );
}

export default App;
