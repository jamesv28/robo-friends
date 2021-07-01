import React from 'react';
import Card from '../Card/card.component';

const CardList = ({robots}) => (
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