import React, { useRef } from 'react';

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const grayStyle = '  width: 400px; height: 400px;filter:grayscale(100%)  ';
  const style = '  width: 400px; height: 400px;  ';
  return (
    <>
      <img
        ref={ref1}
        src="https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?ixid=MXwxMjA3
        fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        style={{ cssText: grayStyle }}
        onMouseEnter={(e) => {
          e.target.style.cssText = style;
        }}
        onMouseLeave={(e) => {
          e.target.style.cssText = grayStyle;
        }}
      />
      <img
        ref={ref2}
        src="https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?ixid=MXwxMjA3
        fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        style={{ cssText: grayStyle }}
        onMouseEnter={() => {
          ref2.current.style.cssText = style;
        }}
        onMouseLeave={() => {
          ref2.current.style.cssText = grayStyle;
        }}
      />
    </>
  );
}

export default App;
