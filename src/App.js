import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from './actions/actions';

import CardList from './components/CardList/cardlist.component';
import Header from './components/Header/header.component';
import Scroll from './containers/Scroll/Scroll';
import ErrorBoundary from './components/Errorboundary/errorboundary.component';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {

    const {searchField, onSearchChange, robots, isPending} = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return !isPending ?
    (
      <>
        <Header searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
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

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
