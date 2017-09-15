import React, { Component } from 'react';
// import logo from './public/logo.svg';
import '../styles/App.css';

import NavBar from './NavBar.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     userName: "",
  //     songArtist: "",
  //     songTitle: "",
  //     songNotes: "",
  //   };
  // }
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <PlayListForm />
        </div>
      </div>
    );
  }
}

export default App;
