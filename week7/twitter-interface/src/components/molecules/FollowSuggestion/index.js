import React from 'react';
import ProfileImage from '../../atoms/ProfileImage';
import './styles.css';

const FollowSuggestion = (props) => {
    return ( 
        <div className="flex-left mb-1">
            <div className="inline-block">
                <ProfileImage imageURL={props.image} />
            </div>
            <div className="inline-block ml-15p">
                {props.name}<br />
                <span className="subtext">{props.tag}</span>
            </div>
            <div className="inline-block"><button className="follow-button">Follow</button></div>
        </div>
    );
}

FollowSuggestion.defaultProps = {
    name: "John Doe",
    tag: "@JohnDoe"
}

export default FollowSuggestion;
