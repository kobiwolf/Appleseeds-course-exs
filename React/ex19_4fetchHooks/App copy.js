import axios from 'axios';
import Card from './componets/Card';
import Input from './componets/Input';
import React, { useEffect, useState } from 'react';

function App() {
  const [original, setOriginal] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const {
        data: { results },
      } = await axios.get('https://randomuser.me/api/?results=16');
      const filterData = results.map((person) => {
        return {
          id: person.id.value,
          name: person.name.first + ' ' + person.name.last,
          picture: person.picture.medium,
        };
      });
      setOriginal(filterData);
      setFilter(filterData);
    };
    fetching();
  }, []);
  const filterByInput = (value) => {
    const filterData = original.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilter(filterData);
  };
  return (
    <>
      <Input func={filterByInput} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {filter.map((person, i) => {
          return <Card person={person} key={i} />;
        })}
      </div>
    </>
  );
}

export default App;
