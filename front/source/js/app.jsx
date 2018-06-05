import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import LeftBar from './LeftBar.jsx'
import Content from './Content.jsx'

class Main extends Component {
  state = {
    info: "wqe1"
  };
  render() {
    return (
      <div id='main'>
        <LeftBar />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<Main />,document.getElementById('app'));
