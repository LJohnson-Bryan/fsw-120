import React from 'react';

const Error = (props) => {
    return ( 
        <div className="errorMessage">ERROR: {props.message}</div>
    );
}

export default Error;
