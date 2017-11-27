'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');


// for code mirror
if (!global.Range) {
  global.Range = function Range() {};

  const createContextualFragment = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0]; // so hokey it's not even funny
  };

  Range.prototype.createContextualFragment = (html) => createContextualFragment(html);

  // HACK: Polyfil that allows codemirror to render in a JSDOM env.
  global.window.document.createRange = function createRange() {
    return {
      setEnd: () => {},
      setStart: () => {},
      getBoundingClientRect: () => {
        return { right: 0 };
      },
      getClientRects: () => [],
      createContextualFragment,
    };
  };
}
