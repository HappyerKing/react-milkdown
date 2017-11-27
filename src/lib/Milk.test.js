import React from 'react';
import { shallow, mount } from 'enzyme'
import { compose, curry } from 'ramda';
import Milk from './Milk';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const attrLength = (render, attr) => render(<Milk />).find(attr).length;
  const expectAL = curry((render, attr, n) => compose(expect, attrLength)(render, attr).toBe(n));
  const shaExAL = expectAL(shallow);
  const mouExAL = expectAL(mount);

  it('render shallow without crash', () => {
    shaExAL('div', 1);
    shaExAL('Dropzone', 1);
  });

  it('render by props', () => {
    expect(mount(<Milk value="QAQ" />).prop('value')).toEqual("QAQ")
  });
});

