import React from 'react';
import Box4 from './Box4';

function Box3() {
  return (
    <div
      style={{
        backgroundColor: 'pink',
        width: '110px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
}
export default Box3;
