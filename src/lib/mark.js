import marked from 'marked';
import { getLanguage, highlight } from 'highlight.js';
import { and, compose, not } from 'ramda';

import 'highlight.js/styles/tomorrow.css';

const renderer = new marked.Renderer();
renderer.code = (code, language) => {
  const highlighted = compose(not, not)(and(language)(getLanguage(language)))
    ? highlight(language, code).value
    : code;
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};
marked.setOptions({ renderer });

export default marked;
