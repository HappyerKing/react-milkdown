import React from 'react';
import { shallow } from 'enzyme'
import Milk from './Milk';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const milk = shallow(<Milk />)

  it('render without crash', () => {
    expect(milk.find('input').exists());
  })
})
