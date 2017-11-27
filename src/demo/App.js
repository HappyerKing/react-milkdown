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
        Based on Facebook's {'\u00A0'}
        <a
          className="SecondExample-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/facebookincubator/create-react-app"
        >
          Create react app
        </a>
      </p>
      <a
        className="SecondExample-github-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Rubbby/create-react-library"
      > Documentation </a>
    </div>
  </div>
)
