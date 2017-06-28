import React, { Component } from 'react';
import './Styles/Button.css';

class Button extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.props.onClick.bind(this);
  }
  render() {
    return (
      <button type="button" onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button