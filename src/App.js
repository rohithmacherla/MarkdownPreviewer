import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//marked documentation usage:
var marked = require('marked');

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = { //assign state to hold the markdown text.
      markedtext: '# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n[Learn more about Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/)\n\nTry it! Write some markdown text here :) If the text exceeds either box, you are able to scroll.'
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({markedtext: e.target.value});
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
          <textarea onChange={this.updateState} value={this.state.markedtext} name="text" id="textbox" cols="40" rows="22"></textarea>
          </div>
          <div className="q4" >
            <div dangerouslySetInnerHTML={{__html: marked(this.state.markedtext)}} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
