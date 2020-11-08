import React from 'react';
import LoginSignUpFeatures from '../../organisms/LoginSignupFeatures';
import SignUpForm from '../../organisms/SignUpForm';
import './styles.css';

const Signup = () => {
    return ( 
        <div className="split-signup">
            <LoginSignUpFeatures />
            <div className="flex-center">
                <SignUpForm />
            </div>
        </div>
    );
}

export default Signup;
