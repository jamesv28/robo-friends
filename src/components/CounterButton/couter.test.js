import React from 'react';
import CouterButton from './counter.button';
import {shallow} from 'enzyme';

it('should take look at the snapshot of the counter button', () => {
    const mockColor = 'red';
    expect(shallow(<CouterButton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CouterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({counter: 2});
})