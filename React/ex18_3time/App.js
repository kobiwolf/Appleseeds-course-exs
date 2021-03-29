import React, { useState } from 'react';
import Input from './componets/Input';
const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const funcs = { setSeconds, setMinutes, setHours };
  return (
    <form>
      <Input text="seconds" funcs={funcs} value={seconds} />
      <br />
      <Input text="minutes" funcs={funcs} value={minutes} />
      <br />
      <Input text="hours" funcs={funcs} value={hours} />
    </form>
  );
};
export default App;
