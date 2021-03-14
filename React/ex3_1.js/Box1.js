import React from 'react';
import Box2 from './Box2';

function Box1() {
  return (
    <div
      style={{
        backgroundColor: 'green',
        width: '150px',
        height: '170px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box2 />
    </div>
  );
}
export default Box1;
