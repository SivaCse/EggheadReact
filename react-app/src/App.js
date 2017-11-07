import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>{this.props.txt}</p>
        <b>bold text</b>
      </div>
    )
  }
}

export default App
