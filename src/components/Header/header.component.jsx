import React from 'react';

const Header = ({searchChange}) => (
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
    </header>
)

export default Header;