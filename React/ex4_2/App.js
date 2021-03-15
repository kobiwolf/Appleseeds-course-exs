import React from 'react';
import Card from './componets/Card/Card';

function App() {
  return (
    <div>
      <Card
        pic="https://picsum.photos/80"
        title="nice pic "
        texta1="visit"
        texta2="about us"
      />
      <Card
        pic="https://picsum.photos/90"
        title="bottom"
        texta1="Let's GO!"
        texta2="lET'S NOT!"
      />
      <Card
        pic="https://picsum.photos/100"
        title="lower"
        texta1="JUST LINK"
        texta2="SAD JOKE"
      />
    </div>
  );
}

export default App;
