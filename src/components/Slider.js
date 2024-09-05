import React, { Component } from 'react';

class Slider extends Component {
  render() {
    const { video } = this.props;

    return (
      <div className="slider">
        <h2>{video.title}</h2>
        <img src={video.thumbnail} alt={video.title} />
        <p>{video.description}</p>
      </div>
    );
  }
}

export default Slider;
