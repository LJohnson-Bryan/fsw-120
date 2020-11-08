import React from 'react';
import Button from '../../atoms/Button';
import {Link, useHistory} from'react-router-dom';
import './styles.css';

const SignUpForm = () => {
    const history = useHistory();
    return ( 
        <form onSubmit={() => history.push("/login")}>
        <h1>Sign Up</h1>
        <label>Username</label>
        <input placeholder="JohnDoe@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="Password1234" />
        <label>Password (Confirm)</label>
        <input type="password" placeholder="Password1234" />
            <Button>Sign Up</Button>
            <div className="login-actions-panel">
                <Link to="/login">Already have an account?</Link>
            </div>
        </form>
    );
}

export default SignUpForm;
