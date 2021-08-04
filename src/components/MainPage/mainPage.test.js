import React from 'react';
import MainPage from './mainPage.component';
import {shallow} from 'enzyme';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    expect(wrapper.instance().filteredRobots([])).toEqual([]);
})

it('filters the correct user', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 3,
                name: 'hohn',
                email: 'john@gmail.com'
            }
        ],
        searchField: 'a',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([])
})