import React, { Component } from 'react';
import { milkFileReader } from '../';
import './Example.scss';

const examStr = `\`\`\`javascript
import { milkFileReader } from 'react-milkdown';

const blobReader = file => (
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      res(file.preview);
    }
    reader.onerror = reader.onabort = rej;
    reader.readAsDataURL(file);
  })
);

const Milk = milkFileReader(blobReader);

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
\`\`\``;

const blobReader = file => (
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      res(file.preview);
    }
    reader.onerror = reader.onabort = rej;
    reader.readAsDataURL(file);
  })
);

const Milk = milkFileReader(blobReader);

export default class SecondExample extends Component {
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
          <a className="SecondExample-github-link" href="#default" >
            File Decorator Use
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
