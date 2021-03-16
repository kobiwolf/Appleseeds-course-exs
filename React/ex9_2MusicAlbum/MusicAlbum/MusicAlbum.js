import React from 'react';
import './MusicAlbum.css';
class MusicAlbum extends React.Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h1>{this.props.title}</h1>
        <h2>the artist:{this.props.name}</h2>
        <h2>{`Number of songs:${this.props.number}`}</h2>
        <h3>{`Length of songs:${this.props.length}`}</h3>
        <a target="_blank" href={this.props.link}>
          LET'S HEAR IT
        </a>
      </div>
    );
  }
}
MusicAlbum.defaultProps = {
  title: 'random',
  name: 'random',
  number: 'random',
  length: 'random',
  link: '',
};
export default MusicAlbum;
