import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';

require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');

const preventCM = (editor, event) => {
  event.preventDefault();
}

export default (props) => (
  <CodeMirror
    className="milk-editor-main"
    {...props}
    onDrop={preventCM}
    onDragOver={preventCM}
    options={{
      mode: 'markdown',
      theme: 'base16-light',
      lineNumbers: true,
    }}
  />
);
