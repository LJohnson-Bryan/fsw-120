import React from 'react';

const Card = (props) => {
    return(
        <div style={{backgroundColor: props.bgColor, margin: "15px", fontSize: "15px", display: "inline-block", width:"250px", textAlign: "center" }}>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <hr />
            <p>{props.info}</p>
        </div>
    );
}

export default Card;