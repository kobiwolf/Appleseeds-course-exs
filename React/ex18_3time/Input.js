import React from 'react';

export default function Input({
  text,
  value,
  funcs: { setSeconds, setMinutes, setHours },
}) {
  const setValues = (value) => {
    switch (text) {
      case 'seconds':
        setSeconds(value);
        setMinutes(value * 60);
        setHours(value * 60 * 60);
        break;
      case 'minutes':
        setSeconds(value / 60);
        setMinutes(value);
        setHours(value * 60);
        break;
      case 'hours':
        setSeconds(value / 60 / 60);
        setMinutes(value / 60);
        setHours(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <label htmlFor={text}>{text}:</label>
      <input
        type="text"
        id={text}
        value={value}
        onChange={(e) => setValues(e.target.value)}
      />
    </>
  );
}
