import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../Button';


import styles from './styles.css';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: 'tea@tearoom.com',
            password: '123456', 
            error: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/account');
        
        if(!this.state.email) {
            return this.setState({ error: 'User email is required'})
        }
        if(!this.state.password) {
            return this.setState({ error: 'User password is required'})
        }

        return this.setState({ error: '' });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className={styles.LoginForm}>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />

                    <label>Password</label>
                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <button type="submit">Log In</button>
                </form>

                <Button id='signUpButton' label="Sign Up" onClick={this.handleSignUp}/>

            </div>
        )
    }
}

export default withRouter(LoginForm);