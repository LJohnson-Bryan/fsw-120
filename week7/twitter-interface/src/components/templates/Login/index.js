import React from 'react';
import LogInForm from '../../organisms/LogInForm';
import '../Signup/styles.css';
import LoginSignUpFeatures from '../../organisms/LoginSignupFeatures';

const Login = () => {
    return ( 
        <div className="split-signup">
            <LoginSignUpFeatures />
            <div className="flex-center">
                <LogInForm />
            </div>
        </div>
    );
}

export default Login;
