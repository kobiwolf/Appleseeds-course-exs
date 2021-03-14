import React from 'react';
import Box3 from './Box3';

function Box2() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        width: '130px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box3 />
    </div>
  );
}
export default Box2;
