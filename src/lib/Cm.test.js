import React from 'react';
import { shallow } from 'enzyme'
import Cm from './Cm';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const cm = shallow(<Cm />)

  it('render without crash', () => {
    expect(cm.find('textarea').exists());
  });
})
