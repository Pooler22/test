import React, { Component } from 'react';
import Button from './../Components/Button';
import logo from './../logo.svg';
import './Styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.onClickButton.bind(this.onClickButton)
  }

  onClickButton() {
    console.log("Clicked from App component")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Project website.
        </p>
        <Button onClick={this.onClickButton}>Click</Button>
      </div>
    )
  }
}

export default App;
