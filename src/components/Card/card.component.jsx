import React from 'react';

const Card = ({username, name, email}) => (
    <div className="bg-light-green dib pa3 ma2 grow bw2 shadow-5 tc" >
        <img src={`https://robohash.org/${username}?size=200x200`} alt={name}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
)

export default Card;