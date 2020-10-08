import React from 'react';
import Die from './Die';

const DiceBox = ({state, selector}) => {
    return ( 
    <div style={{width: "300px", display: "block", margin: "0 auto", textAlign: "center"}}>
        <Die number="Dice 1" state={state.dice1} selected={state.selectedDice.includes("Dice 1")} selector={selector} />
        <Die number="Dice 2" state={state.dice2} selected={state.selectedDice.includes("Dice 2")} selector={selector} />
        <Die number="Dice 3" state={state.dice3} selected={state.selectedDice.includes("Dice 3")} selector={selector} />
        <Die number="Dice 4" state={state.dice4} selected={state.selectedDice.includes("Dice 4")} selector={selector} />
        <Die number="Dice 5" state={state.dice5} selected={state.selectedDice.includes("Dice 5")} selector={selector} />
    </div> 
    );
}

export default DiceBox;