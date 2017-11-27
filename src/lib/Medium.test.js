import React from 'react';
import { shallow } from 'enzyme'
import { compose, curry, repeat } from 'ramda';
import Medium from './Medium';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const md = (n, text = false) => <Medium options={repeat(text ? {text} : {}, n)} />
  const attrLength = (render, attr, n) => compose(render, md)(n).find(attr).length;
  const expectAL = curry((render, attr, n) => compose(expect, attrLength)(render, attr, n).toBe(n));
  const shaExAL = expectAL(shallow);

  const btnText = compose(shallow, md);

  it('render shallow without crash', () => {
    shaExAL('button', 2);
    shaExAL('button', 5);
  });

  it('render text as expected', () => {
    expect(
      btnText(5, 'hello')
      .find('button')
      .map(x => x.text())
    ).toEqual(repeat('hello', 5))
  });

})
