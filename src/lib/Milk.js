import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { curry, not, reduce, map } from 'ramda';

import marked from './mark';
import Cm from './Cm';
import Medium from './Medium';
import Control from './Control';

import './Milk.scss';

const readFileDeco = curry((fn, target) => { target.readFile = fn });

class Milk extends Component {

  state = {
    input: this.props.value,
    accept: 'image/*',
    files: [],
    dropzoneActive: false,
    editor: {},
    selectActive: false,
    clientX: 0,
    clientY: 0,
    mediumDisplay: false,
    canUpdate: true,
    preview: false,
    fullScreen: false,
    pasteMode: false
  }

  static readFile = file => (
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = event => {
        res(event.target.result);
      }
      reader.onerror = reader.onabort = rej;
      reader.readAsDataURL(file);
    })
  )

  static async readMultiFiles(files) {
    return await reduce(async (t, f) => {
      const acc = await t;
      const result = await this
        .prototype
        .constructor
        .readFile(f);
      return `${acc}![${f.name}](${result})\n`;
    }, Promise.resolve(''), files);
  }

  onChange = (editor, data, value) => {
    console.log(editor.getValue())
    if (this.state.pasteMode) {
      this.setState({
        pasteMode: false,
        input: this.props.onChange(value.replace(/\n/g, '  \n'))
      });
    } else {
      this.setState({
        input: this.props.onChange(value),
      });
    }
  }

  onDrop = files => {
    const { editor } = this.state;
    Object
      .getPrototypeOf(this)
      .constructor
      .readMultiFiles(files)
      .then(convert => {
        editor.replaceSelection(convert);
        this.setState({
          files,
          dropzoneActive: false
        });
      });
  }

  onDragEnter = () => {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false
    });
  }

  onBeforeChange = (editor, data, value) => {
    this.setState({
      input: value
    });
  }

  cmDragEnter = editor => {
    this.setState({
      dropzoneActive: true,
      editor: editor.getDoc()
    });
  }

  onCursor = editor => {
    if (editor.getDoc().somethingSelected() && this.state.canUpdate) {
      this.setState({
        selectActive: true,
        editor: editor.getDoc()
      });
    } else {
      this.setState({
        selectActive: false
      });
    }
  }

  onMouseUp = event => {
    if(this.state.selectActive) {
      this.setState({
        clientX: event.clientX,
        clientY: event.clientY,
        mediumDisplay: true
      });
    } else {
      this.setState({
        mediumDisplay: false
      });
    }
  }

  onPreview = () => {
    this.setState({
      preview: not(this.state.preview)
    });
  }

  onFullScreen = () => {
    this.setState({
      fullScreen: not(this.state.fullScreen)
    });
  }

  onPasteModeChange = e => {
    this.setState({
      pasteMode: e.target.value === 'paste' ? true : false
    });
  }

  onFullScreen = () => {
    this.setState({
      fullScreen: not(this.state.fullScreen)
    });
  }

  handleCtx = () => {
    const { editor } = this.state;
    const sel = editor.getSelections();
    const wrapper = fn => () => {
      this.setState({
        canUpdate: false
      });
      setTimeout(() => {
        editor.replaceSelections(map(fn, sel), 'around');
        this.setState({
          canUpdate: true
        });
      }, 0);
    }

    return {
      h1: wrapper(x => `# ${x}`),
      mark: wrapper(x => `<mark>${x}</mark>`),
      underline: wrapper(x => `<u>${x}</u>`),
      bold: wrapper(x => `*${x}*`),
      italic: wrapper(x => `**${x}**`),
    };
  }

  render() {

    const {
      input,
      accept,
      dropzoneActive,
      mediumDisplay,
      clientX,
      clientY,
      preview,
      fullScreen,
      pasteMode
    } = this.state;
    const {style} = this.props;
    return (
      <div
        className="milk"
        style={style}
      >
        { mediumDisplay && <Medium
          top={clientY + 10}
          left={clientX}
          options={[
            {
              type: 'H1',
              text: 'H1',
              fn: this.handleCtx().h1
            },
            {
              type: 'header',
              fn: this.handleCtx().mark
            },
            {
              type: 'underline',
              fn: this.handleCtx().underline
            },
            {
              type: 'bold',
              fn: this.handleCtx().bold
            },
            {
              type: 'italic',
              fn: this.handleCtx().italic
            },
          ]}
        /> }
        <Dropzone
          style={
            fullScreen
              ? { position: 'absolute', top: 0, bottom: 0, left: 0, width: '50%' }
              : preview
                ? { display: 'none' }
                : { display: 'block' }
          }
          className="milk-dropzone"
          disableClick={true}
          accept={accept}
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onMouseUp={this.onMouseUp}
        >
          {
            dropzoneActive &&
              <div className="milk-full-dropzone" />
          }
          <Cm
            value={input}
            onCursor={this.onCursor}
            onBeforeChange={this.onBeforeChange}
            onChange={this.onChange}
            onDragEnter={this.cmDragEnter}
          />
          <Control
            onFullScreen={this.onFullScreen}
            onPreview={this.onPreview}
            onPasteModeChange={this.onPasteModeChange}
            pasteMode={pasteMode}
          />
        </Dropzone>
        {
          (preview || fullScreen) &&
          <div
            className="milk-preview"
            dangerouslySetInnerHTML={{__html: marked(input)}}
            style={fullScreen ? {
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '50%'
            } : {}}
          />
        }
      </div>
    );
  }
};

export default Milk;

export const milkFileReader = fn => (
  @readFileDeco(fn)
  class extends Milk {}
);
