import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const ProfileImage = (props) => {
    return ( 
        <Link to={props.link}><img className="profile-img" src={props.imageURL} /></Link>
    );
}

ProfileImage.defaultProps = {
    link: "/profile",
    imageURL: "https://images.unsplash.com/photo-1603997478098-3a448cd7e521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
}

export default ProfileImage;
