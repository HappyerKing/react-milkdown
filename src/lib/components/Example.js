import React, { Component } from 'react';
import Milk from '../';
import './SecondExample.scss';

const examStr = `\`\`\`javascript
import Milk from 'react-milkdown';

import 'font-awesome/css/font-awesome.min.css'; // milkdown uses font-awesome, you can ignore this if your project already import font-awesome

class Milkdown extends Component {
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
      <Milk
        value={value}
        onChange={this.onChange}
        style={{margin: "0 auto"}}
      />
    )
  }
}
\`\`\``

export default class Example extends Component {
  state = {
    value: examStr
  }

  onChange = value => {
    this.setState({ value });
    return value;
  }

  render() {
    const { value } = this.state
    return (
      <div className="SecondExample">
        <div className="SecondExample-text">
          <a
            className="SecondExample-github-link"
            href="https://github.com/Saul-Mirone/react-milkdown/blob/master/src/lib/components/Example.js"
          >
            Default Use
          </a>
          <Milk
            value={value}
            onChange={this.onChange}
            style={{margin: "0 auto"}}
          />
        </div>
      </div>
    )
  }
}
