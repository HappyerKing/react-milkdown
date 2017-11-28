# react-milkdown

强大的React Markdown编辑器！

[点击这里查看demo]()

![logo](./logo-mini.svg)

------

# 安装

```shell
npm install --save react-milkdown
yarn add react-milkdown
```

# 基本使用

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

# 特性

- [x] 高亮
- [x] 多行编辑
- [x] 图片拖拽上传（支持多图）
- [x] Medium风格的辅助条
- [x] 预览
- [x] 全屏编辑
- [x] 粘贴模式（自动转换换行符）

# Props

- `value`: milkdown编辑器的value
- `onChange`: 唯一的参数是**value**. **重要!!!** 在onChange函数的末尾 **必须** `return value`
- `style`: 改变milkdown编辑器的样式



# 装饰器

Milkdown 提供了一个方法（本质上是一个装饰器）来让你改变上传图片的方法 （默认是转换为base64），你可以这样使用：

```jsx
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
```

# License

MIT-licensed. 查看 [LICENSE](https://github.com/Saul-Mirone/react-milkdown/blob/master/LICENSE).