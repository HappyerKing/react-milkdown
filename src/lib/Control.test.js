import React from 'react';
import { shallow, mount } from 'enzyme'
import { compose, curry } from 'ramda';
import Control from './Control';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const attrLength = (render, attr) => render(<Control />).find(attr).length;
  const expectAL = curry((render, attr, n) => compose(expect, attrLength)(render, attr).toBe(n));
  const shaExAL = expectAL(shallow);
  const mouExAL = expectAL(mount);

  it('render shallow without crash', () => {
    shaExAL('Rdo', 2);
    shaExAL('Btn', 2);
    shaExAL('div', 5);
  });

  it('render mount in a full dom', () => {
    mouExAL('label', 2);
    mouExAL('button', 2);
    mouExAL('input', 2);
  });
})
