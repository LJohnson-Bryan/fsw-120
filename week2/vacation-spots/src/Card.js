import React from 'react';

const Card = (props) => {

    let dollarsign;
    if(props.price >= 1000) {
        dollarsign = "$$$";
    } else if(props.price < 1000 && props.price > 500) {
        dollarsign = "$$";
    } else if(props.price <= 500){
        dollarsign = "$";
    }

    return (  
        <div className="card" style={{background: `linear-gradient(to bottom right, ${props.seasonColor}, ${props.seasonColor}), url(${props.backgroundImage})`, backgroundPosition: "center"}}>
            <h1>{props.place}</h1>
            <h2>Time: {props.timeToGo}</h2>
            <p>Price: {dollarsign + props.price}</p>
            <hr />
        </div>
    );
}
 
export default Card;