import React from 'react';

const Die = ({state, number, selected, selector}) => {

    return (<h2 
            style={ selected ? {border: "2px solid black"} : {border: "none"}}
            onClick={ () => selector([number]) }>
            {number}: {state}
            </h2>);
}

export default Die;
