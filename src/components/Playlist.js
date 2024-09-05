import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    const { playlist, onVideoSelect } = this.props;

    if (!playlist) {
      return <div className="playlist">Please select a playlist.</div>;
    }

    return (
      <div className="playlist">
        <h2>{playlist.title}</h2>
        <ul>
          {playlist.videos.map(video => (
            <li key={video.id} onClick={() => onVideoSelect(video)}>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Playlist;
