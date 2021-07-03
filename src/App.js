import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setSearchField} from './actions/actions';
import CardList from './components/CardList/cardlist.component';
import Header from './components/Header/header.component';
import Scroll from './containers/Scroll/Scroll';
import ErrorBoundary from './components/Errorboundary/errorboundary.component';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({
        robots: users
      }))
  }

  render() {

    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return robots.length ?
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
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
