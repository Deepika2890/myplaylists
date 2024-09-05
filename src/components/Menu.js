import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const { playlists, onPlaylistSelect } = this.props;

    return (
      <div className="menu">
        <h2>Playlists</h2>
        <ul>
          {playlists.map(playlist => (
            <li key={playlist.id} onClick={() => onPlaylistSelect(playlist)}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <p>{playlist.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
