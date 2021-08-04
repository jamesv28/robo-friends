import {shallow} from 'enzyme';
import ErrorBoundary from './errorboundary.component';
import React from 'react';

it('should take a look at snapshot testing with error boundary', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})