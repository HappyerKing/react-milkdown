import React from 'react';
import Example from '../lib/components/Example';
import SecondExample from '../lib/components/SecondExample';


export default () => (
  <div>
    <h1 className="Example-text">React Milkdown</h1>
    <Example />
    <SecondExample />
    <div className="SecondExample">
      <p className="SecondExample-text">
        Based on
        <a
          className="SecondExample-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://codemirror.net/"
        >
          CodeMirror
        </a>
        and
        <a
          className="SecondExample-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react-dropzone.js.org/"
        >
          react-dropzone
        </a>
      </p>
      <a
        className="SecondExample-github-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Saul-Mirone/react-milkdown"
      > Documentation </a>
    </div>
  </div>
)
