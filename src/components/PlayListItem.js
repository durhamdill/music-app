import React, { Component } from 'react';
// import PlayList from './Playlist.js';

export default class PlayListItem extends Component {

  render() {
    return(
      <div>
        {this.props.songList.map((song) =>
            <div key={song._id}>
              <h4>User: {song.userName}</h4>
              <h4>Artist/Band: {song.songArtist}</h4>
              <h4>Title: {song.songTitle}</h4>
              <h4>Notes: {song.songNotes}</h4>
            </div>
          )}
      </div>
    )
  }
}
