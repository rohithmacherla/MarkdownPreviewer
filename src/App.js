import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//marked documentation usage:
var marked = require('marked');

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = { //assign state to hold the markdown text.
      markedtext: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="title">
            <h1>Github Flavored Markdown Previewer</h1>
        </div>
        <div className="right">
        <h1>Markdown Text: </h1>

        </div>
        <div className="left">
        <h1>Instant Preview: </h1>

        </div>
      </div>
    );
  }
}


export default App;
