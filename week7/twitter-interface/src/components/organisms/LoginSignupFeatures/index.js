import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUsers, faComment } from '@fortawesome/free-solid-svg-icons'
import '../../templates/Signup/styles.css';

const LoginSignUpFeatures = () => {
    return ( 
        <div className="bg-signup flex-center text-white flex-column text-left sm-hide">
                <div>    
                    <h2 className="flex-left"> 
                    <FontAwesomeIcon icon={faSearch} /> Follow your interests.
                    </h2>

                    <h2 className="flex-left">
                    <FontAwesomeIcon icon={faUsers} /> Hear what people are talking about.
                    </h2>

                    <h2 className="flex-left">
                    <FontAwesomeIcon icon={faComment} /> Join the conversation.
                    </h2>
                </div>
            </div>
    );
}

export default LoginSignUpFeatures;
