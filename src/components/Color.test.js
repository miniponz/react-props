import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color Component', () => {
  it('matches the color thing', () => {
    const wrapper = shallow(<Color name="purple"  rgb="128,0,128" />);

    expect(wrapper).toMatchSnapshot();
  });
});
