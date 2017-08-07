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
            <h1 className="titletext">Github Flavored Markdown Previewer</h1>
        </div>
        <div className="display">
          <div className="q1">
            <h1>Markdown Text</h1>
          </div>
          <div className="q2">
            <h1>Instant Preview</h1>
          </div>
          <div className="q3">
          <textarea name="text" id="textbox" cols="40" rows="19"></textarea>
          </div>
          <div className="q4"></div>
        </div>
      </div>
    );
  }
}


export default App;
