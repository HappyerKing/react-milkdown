# react-milkdown

Powerful Markdown editor as React components.

[Check live demo here!](https://saul-mirone.github.io/react-milkdown/)

[查看中文说明](https://github.com/Saul-Mirone/react-milkdown/blob/master/README_CN.md)

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
```

# Features

- [x] Highlight 
- [x] Multi-line edit
- [x] Drag Upload Image(support multiple image)
- [x] Medium editor style control bar
- [x] Preview
- [x] Full screen edit
- [x] Paste mode (auto convert newline when paste)

# Props
* `value`: the context of editor
* `onChange`: the only argument of onChange is **value**. **IMPORTANT!!!** at the end of this function, you **MUST** `return value`
* `style`: change the style of milkdown's container



# Decorator

Milkdown provide a function (essentially is a decorator) to let you change method of upload file (change to base64 by default), you can use it like this:

```jsx
import React, { Component } from 'react';
import { milkFileReader } from 'react-milkdown';

import 'font-awesome/css/font-awesome.min.css'; // milkdown uses font-awesome, you can ignore this if your project already import font-awesome

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
```

# License

MIT-licensed. See [LICENSE](https://github.com/Saul-Mirone/react-milkdown/blob/master/LICENSE).