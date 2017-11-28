# react-milkdown

Powerfull Markdown editor as React components.

[Check live demo here!]()

[查看中文说明]()

![logo](./logo-mini.svg)

***

# Installing

```shell
npm install --save react-milkdown
yarn add react-milkdown
```

# Basic usage

```jsx
import React, { Component } from 'react';
import Milk from 'react-milkdown';

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
```

- [x] Highlight 
- [x] Multi-line edit
- [x] Drag Upload Image
- [x] Medium editor style control bar
- [x] Preview
- [x] Full screen edit
- [x] Paste mode (auto convert newline when paste)

# Props
* `value`: the context of editor
* `onChange`: the only argument of onChange is **value**. **IMPORTANT!!!** after setState of the value, you **MUST** `return value`
* `style`: change the style of milkdown's container