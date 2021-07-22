import {shallow} from 'enzyme';
import CardList from './cardlist.component';
import React from 'react';

it('should take a look at snapshot testing', () => {
    const mockRobots = [
        {
           id: 1,
           name: 'Jon Snow',
           username: 'JonJon',
           email: 'jon@theWall.com' 
        },
        {
            id: 2,
            name: 'Tyrion Lanaster',
            username: 'tyrionPaysHisDebts',
            email: 'tyrion@castelyrock.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})