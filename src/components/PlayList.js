import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }

componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("state", this.state.songs);
      })
}

fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render(){
    return(
      <div>
        <label className="card-title">SHARED SONG LIST</label>
        <input onClick={this.fetchData} className="btn btn-secondary" type="submit" value="Update"/>
        <div className = "card">
          <PlayListItem songList={this.state.songs}/>
        </div>
      </div>
    )
  }
}
