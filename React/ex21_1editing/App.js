import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [showInput, setShowInput] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  const display = () => {
    return !showInput ? (
      <button onClick={() => setShowInput(true)}>edit</button>
    ) : (
      <>
        <input ref={ref} />
        <button onClick={() => setShowInput(false)}>save</button>
      </>
    );
  };
  return <>{display()}</>;
}

export default App;
