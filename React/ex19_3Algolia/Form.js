import React, { useState } from 'react';
export default function Input(props) {
  const [input, setInput] = useState('hooks');
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={() => props.setTerm(input)}>search</button>
    </>
  );
}
