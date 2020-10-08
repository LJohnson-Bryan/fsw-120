import React from 'react';
import Square from './Square';
import './styles.css';
import pianoA from './pianoSounds/piano_A.mp3';
import pianoB from './pianoSounds/piano_B.mp3';
import pianoC from './pianoSounds/piano_C_sharp.mp3';
import pianoD from './pianoSounds/piano_D.mp3';
import pianoE from './pianoSounds/piano_E.mp3';
import pianoF from './pianoSounds/piano_F.mp3';
import pianoG from './pianoSounds/piano_G.mp3';
import pianoMidC from './pianoSounds/piano_middle_C.mp3';
// import disco1Music from './autoMusic/disco.mp3';
// import disco2Music from './autoMusic/disco2.mp3';

class App extends React.Component {

  state = {
    colors: ["white", "white", "white", "white"]
  }

  render() {
    const squares = this.state.colors.map(squareColor => {
      return (
        <Square color={squareColor}/>
      );
    });

    return (
      <div>
        <div className="grid">
          {squares}
        </div>
        <div className="container">
          <h2>DJ Control Board</h2>
          <button onClick={() => {
            const audio = new Audio(pianoA);
            audio.play();
            if(this.state.colors[0] !== "white"){
            this.setState({colors: ["white", "white", "white", "white"]});
          } else if(this.state.colors[0] === "white") {
            this.setState({colors: ["black", "black", "black", "black"]});
          }}}>Black White</button>

          <button onClick={() => {
            const audio = new Audio(pianoB);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: ["purple", "purple", oldState[2], oldState[3]]})}}>Purple</button>

          <button onClick={() => {
            const audio = new Audio(pianoC);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: [oldState[0], oldState[1], "blue", oldState[3]]});
          }}>B-L Blue</button>

          <button onClick={() => {
            const audio = new Audio(pianoD);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: [oldState[0], oldState[1], oldState[2], "blue"]});
          }}>B-R Blue</button>

          <br />

          <button onClick={() => {
            const audio = new Audio(pianoE);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: ["red", oldState[1], oldState[2], oldState[3]]});
          }}>T-L Red</button>

          <button onClick={() => {
            const audio = new Audio(pianoF);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: [oldState[0], "green", oldState[2], oldState[3]]});
          }}>T-R Green</button>

          <button onClick={() => {
            const audio = new Audio(pianoG);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: [oldState[0], oldState[1], "orange", oldState[3]]});
          }}>B-L Orange</button>

          <button onClick={() => {
            const audio = new Audio(pianoMidC);
            audio.play();
            const oldState = this.state.colors;
            this.setState({colors: [oldState[0], oldState[1], oldState[2], "pink"]});
          }}>B-R Pink</button>

        </div>
      </div>
    );
  }
}

export default App;
