import React, { useState } from 'react';

function CheckBox({ text, updateFinish, finish }) {
  const [check, setCheck] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        onChange={(e) => {
          setCheck(e.target.checked);
          updateFinish(text);
        }}
        checked={finish}
      />
      <span>{text}</span>
    </li>
  );
}
export default CheckBox;
