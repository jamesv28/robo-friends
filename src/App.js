import React, { Component } from 'react';
import CardList from './components/CardList/cardlist.component';
import Header from './components/Header/header.component';
import Scroll from './containers/Scroll/Scroll';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({
        robots: users
      }))
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {

    const {robots} = this.state;

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return robots.length ?
    (
      <>
        <Header searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </>
     ) :
     (
      <header>
        <h1 className="tc" aria-busy="true" role="alert">Loading...</h1>
      </header>
     ) 

  }
}

export default App;
