import React, { Component } from 'react';

export default class PlayListForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="userName">User Name:</label>
          <input type="text" className="form-control" id="userName" placeholder="Name or Username"/>
          <label htmlFor="songArtist">Artist/Band:</label>
          <input type="text" className="form-control" id="songArtist" placeholder="Artist or Band Name"/>
          <label htmlFor="songTitle">Song Title:</label>
          <input type="text" className="form-control" id="songTitle" placeholder="Song Title"/>
          <label htmlFor="songNotes">Notes about Song:</label>
          <textarea type="text" className="form-control" id="songNotes"/>
          <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}
