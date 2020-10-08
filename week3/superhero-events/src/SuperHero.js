import React from 'react';

const SuperHero = (props) => {
    return ( 
    <div className="mb-3">
        <a href="#" onClick={(e) => {alert(props.catchPhrase); e.preventDefault();}} className="grid">
        <div className="flex">
            <img src={props.img} alt="Super Hero" />
        </div>
        <div>
            <h1>"{props.name}"</h1>
            <h1>from <em>{props.show}</em></h1>
        </div>
        </a>
    </div> 
    );
}

export default SuperHero;