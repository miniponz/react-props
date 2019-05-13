import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Color Component', () => {
  it('matches the color thing', () => {
    const wrapper = shallow(<Dog name="Ana Dogg" age={2}  weight="27 lbs" />);

    expect(wrapper).toMatchSnapshot();
  });
});
