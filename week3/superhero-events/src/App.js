import React from 'react';
import SuperHero from './SuperHero';
import data from './data.json';
import './styles.css';

class App extends React.Component{

  render() {
    const heroData = data;
    const superHeroList = heroData.map(hero => {
      return(
        <SuperHero name={hero.name} img={hero.imageName} catchPhrase={hero.catchPhrase} show={hero.show} />
      );
    });

    return (
      <div className="container">
        {superHeroList}
      </div>
    );
  }
}

export default App;
