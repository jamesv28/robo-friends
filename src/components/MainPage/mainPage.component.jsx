import React, { Component } from 'react';

import CardList from '../CardList/cardlist.component';
import Header from '../Header/header.component';
import Scroll from '../../containers/Scroll/Scroll';
import ErrorBoundary from '../Errorboundary/errorboundary.component';

import './mainPage.style.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
      return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
      })
  };

  render() {

    const {onSearchChange, robots, isPending} = this.props;

    return !isPending ?
    (
      <>
        <Header searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredRobots(robots)}/>
          </ErrorBoundary>
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

export default MainPage;

