import React from 'react';
import Card from './Card';
import VacationSpots from './VacationSpots';
import './styles.css';

const App = () => {

  const listData = VacationSpots.map(vacationLocation => {

    let seasonColor, backgroundImage;
    switch(vacationLocation.timeToGo.toLowerCase()) {
      case "winter":
        backgroundImage = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80";
        seasonColor = "rgba(0, 255, 255, 0.35)";
      break;
      case "spring":
        backgroundImage = "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
        seasonColor = "rgba(144, 238, 144, 0.75)";
      break;
      case "summer":
        backgroundImage = "https://images.unsplash.com/photo-1491929007750-dce8ba76e610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80";
        seasonColor = "rgba(254, 255, 73, 0.55)";
      break;
      case "fall":
        backgroundImage = "https://images.unsplash.com/photo-1482015527294-7c8203fc9828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
        seasonColor = "rgba(255, 165, 0, 0.75)";
      break;
      default:
        seasonColor = "black";
      break;
    }
    return(
      <Card key={vacationLocation.id} backgroundImage={backgroundImage} seasonColor={seasonColor} place={vacationLocation.place} price={vacationLocation.price} timeToGo={vacationLocation.timeToGo} />
    );
  });

  return (
  <div className="container">
    {listData}
  </div>
  );
}

export default App;
