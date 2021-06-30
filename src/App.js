import React, { Component } from 'react';
import Card from './components/Card/card.component';
import {robots} from './robots';

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
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
      </div>
    );
  }
}

export default App;
