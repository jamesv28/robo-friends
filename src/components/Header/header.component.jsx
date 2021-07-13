import React, { Component } from 'react'
import CounterButton from '../CounterButton/counter.button';

class Header extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        const {searchChange} = this.props;
        return (
            <header className="pa2 tc">
                <h1 className="tc">
                    <strong className="f1" style={{textShadow: '2px 2px white'}}>ROBO FRIENDS</strong>
                </h1>
                <input 
                    onChange={searchChange}
                    className="pa3 ba b--green bg-lightest-blue" 
                    type="search" 
                    placeholder="Search Robots" 
                />
                <CounterButton color={'red'} />
            </header>
        )
    }
}

export default Header;