import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: "",
    };
    this.addToList = this.addToList.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }

  addToList = (e) => {
      e.preventDefault();
      // this.setState({
      //   userName: e.target.value,
      //   songTitle: e.target.value,
      //   songArtist: e.target.value,
      //   songNotes: e.target.value});
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
      console.log(listItem);

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <label htmlFor="userName">User Name:</label>
          <input onChange={this.updateItem} type="text" className="form-control" id="userName" placeholder="Name or Username" value={this.state.userName}/>
          <label htmlFor="songArtist">Artist/Band:</label>
          <input onChange={this.updateItem} type="text" className="form-control" id="songArtist" placeholder="Artist or Band Name" value={this.state.songArtist}/>
          <label htmlFor="songTitle">Song Title:</label>
          <input onChange={this.updateItem} type="text" className="form-control" id="songTitle" placeholder="Song Title" value={this.state.songTitle}/>
          <label htmlFor="songNotes">Notes about Song:</label>
          <textarea onChange={this.updateItem} type="text" className="form-control" id="songNotes" value={this.state.songNotes}/>
          <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
