import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [showbutton, setShowButton] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setShowButton(true);
  }, [showbutton]); //added the depencesic to avoid warning of infinity

  return (
    <>
      <video
        width="320"
        height="240"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
        ref={ref}
      ></video>
      {showbutton && (
        <>
          <button onClick={() => ref.current.play()}>play</button>
          <button onClick={() => ref.current.pause()}>stop</button>
        </>
      )}
    </>
  );
}

export default App;
