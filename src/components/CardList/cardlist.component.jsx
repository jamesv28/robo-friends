import React from 'react';
import Card from '../Card/card.component';
import {robots} from '../../robots';

const CardList = () => (
    <main>
        {
          robots.map(robot => (
            <Card
              key={robot.id}
              name={robot.name}
              username={robot.username}
              email={robot.email}
            />
          ))
        }
    </main>
)

export default CardList