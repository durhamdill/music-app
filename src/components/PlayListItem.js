import React, { Component } from 'react';
// import PlayList from './Playlist.js';

export default class PlayListItem extends Component {

  render() {
    return(
      <div>
        {this.props.songList.map((song) =>
            <div key={song._id}>
              <h4>User: {song.userName}</h4>
            </div>
          )}
      </div>
    )
  }
}
