import React, { Component } from 'react';
import Menu from './components/Menu';
import Playlist from './components/Playlist';
import Slider from './components/Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      selectedPlaylist: null,
      selectedVideo: null,
    };
  }
  
  componentDidMount() {
    const dummyPlaylists = [
      {
        id: 1,
        title: 'Playlist 1',
        thumbnail: 'https://via.placeholder.com/100',
        videos: [
          {
            id: 101,
            title: 'Video 1',
            thumbnail: 'https://via.placeholder.com/150',
            description: 'Description for Video 1',
          },
          {
            id: 102,
            title: 'Video 2',
            thumbnail: 'https://via.placeholder.com/150',
            description: 'Description for Video 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Playlist 2',
        thumbnail: 'https://via.placeholder.com/100',
        videos: [
          {
            id: 201,
            title: 'Video A',
            thumbnail: 'https://via.placeholder.com/150',
            description: 'Description for Video A',
          },
          {
            id: 202,
            title: 'Video B',
            thumbnail: 'https://via.placeholder.com/150',
            description: 'Description for Video B',
          },
        ],
      },
    ];

    this.setState({ playlists: dummyPlaylists });
  }

  handlePlaylistSelect = (playlist) => {
    this.setState({ selectedPlaylist: playlist, selectedVideo: null });
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { playlists, selectedPlaylist, selectedVideo } = this.state;
    
    return (
      <div className="app">
        <Menu 
          playlists={playlists} 
          onPlaylistSelect={this.handlePlaylistSelect} 
        />
        <Playlist 
          playlist={selectedPlaylist} 
          onVideoSelect={this.handleVideoSelect} 
        />
        {selectedVideo && (
          <Slider video={selectedVideo} />
        )}
      </div>
    );
  }
}

export default App;
