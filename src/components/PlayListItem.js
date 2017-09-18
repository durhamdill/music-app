import React, { Component } from 'react';
// import PlayList from './Playlist.js';

export default class PlayListItem extends Component {

  render() {
    return(
      <div>
        {this.props.songList.map((song) =>
            <div className="card-block" key={song._id}>
              <p className="card-text">User: {song.userName}</p>
              <p className="card-text">Artist/Band: {song.songArtist}</p>
              <p className="card-text">Title: {song.songTitle}</p>
              <p className="card-text">Notes: {song.songNotes}</p>
            </div>
          )}
      </div>
    )
  }
}
