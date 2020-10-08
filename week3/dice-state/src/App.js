import React from 'react';
import DiceBox from './DiceBox';

class App extends React.Component {

  //Initialize original state
  state = {
    dice1: 0,
    dice2: 0,
    dice3: 0,
    dice4: 0,
    dice5: 0,
    diceReset: 3,
    selectedDice: [""]
  }

  //Generate random dice numbers
  generateDice = () => {
    const random = () => {return(Math.floor(Math.random()*6) + 1)} ;
    const oldReset = this.state.diceReset;
    if(this.state.diceReset < 2) {
      this.setState({
        dice1: 0,
        dice2: 0,
        dice3: 0,
        dice4: 0,
        dice5: 0,
        diceReset: 3,
        selectedDice: Array()
      });
    } else {
      if(!this.state.selectedDice.includes("Dice 1")) { this.setState({dice1: random() })};
      if(!this.state.selectedDice.includes("Dice 2")) { this.setState({dice2: random() })};
      if(!this.state.selectedDice.includes("Dice 3")) { this.setState({dice3: random() })};
      if(!this.state.selectedDice.includes("Dice 4")) { this.setState({dice4: random() })};
      if(!this.state.selectedDice.includes("Dice 5")) { this.setState({dice5: random() })};
      this.setState({diceReset: oldReset - 1});
    }
  }

  //Write method to pass down to the component for click handling
  selectDie = (die) => {
    console.log(die)
    let newArray = this.state.selectedDice.concat(die);
    this.setState({
      selectedDice: newArray
    });
  }

  //Render the App Component and feed it the dice box, passing state down to the stateless function component with a prop
  render() {
    return (
      <div className="App">
        <DiceBox state={this.state} selector={this.selectDie} />
        <h3 style={{width: "300px", display: "block", margin: "0 auto", textAlign: "center"}}>Remaining till reset: {this.state.diceReset}</h3>
        <button style={{width: "300px", display: "block", margin: "15px auto", textAlign: "center", padding: "14px"}} onClick={this.generateDice}>Roll the Dice</button>
      </div>
    );
  }
}

export default App;
