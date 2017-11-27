import React, { Component } from 'react';
import Example from '../lib';
// import { SecondExample } from '../lib';


export default class App extends Component {
  state = {
    value: ""
  }

  onChange = value => {
    this.setState({ value });
    return value;
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Example
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
