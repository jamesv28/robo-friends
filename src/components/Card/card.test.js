import {shallow} from 'enzyme';
import Card from './card.component';
import React from 'react';

it('should only render one component', () => {
    expect(shallow(<Card />).length).toEqual(1);
})

it('should take a look at snapshot testing', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})