import React from 'react';
import Button from '../../atoms/Button';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';

const LoginForm = () => {
    const history = useHistory();
    return ( 
        <form onSubmit={() => history.push("/home")}>
        <h1>Log In</h1>
        <label>Username</label>
        <input placeholder="JohnDoe@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="Password1234" />
        <Button>Log In</Button>
        <div className="login-actions-panel">
        <Link to="/signup">Need an account?</Link></div>
        </form>
    );
}

export default LoginForm;
