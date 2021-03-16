import React from 'react';
import MusicAlbum from './componets/MusicAlbum/MusicAlbum';
class App extends React.Component {
  state = { time: 0 };
  render() {
    return (
      <div className="container">
        <MusicAlbum
          title="Dark horse"
          name="nicklback"
          number="13"
          length="48:15"
          link="https://www.youtube.com/watch?v=paowcfQZtdA&list=PLhQ__WZiNh3XyKAmrin82ER0WBFiDrR2f"
        />
        ;
        <MusicAlbum
          title="Elul"
          name="Yishay Ribo"
          number="5"
          length="25:25"
          link="https://www.youtube.com/watch?v=SHErQrvvftQ"
        />
        ;
        <MusicAlbum title="The Beateles 1970" number="7" link=" #" />;
        <MusicAlbum />;
      </div>
    );
  }
}
export default App;
