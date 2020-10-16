import React from 'react';

const Badge = (props) => {
    return ( 
        <div className="container">
            <div className="card-outline">
                <div>
                    <h2 style={{background: props.color}}>Badge:</h2>
                </div>
                <div className="grid">
                    <div>
                        <p>Name: {props.data.firstName} {props.data.lastName}</p>
                        <p>Place of birth: {props.data.placeOfBirth}</p>
                        <p>Email: {props.data.email}</p>
                    </div>
                    <div>
                        <p>phone: {formatPhoneNumber(props.data.phone)}</p>
                        <p>Favorite Food: {props.data.favoriteFood}</p>
                    </div>
                </div>
                <div className="response">{props.data.responseText}</div>
            </div>
        </div>
    );
}

const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

export default Badge;