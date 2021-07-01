import React, { Component } from 'react';
import CardList from './components/CardList/cardlist.component';
import Header from './components/Header/header.component';

import {robots} from './robots';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots,
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      < >
        <Header searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </>
    );
  }
}

export default App;
