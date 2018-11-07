import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Button';

import styles from './styles.scss';
import * as actions from '../../reducers/users/actions';

class LoginForm extends Component {
    
    constructor() {
        super();

        this.state = {
            email: '',
            password: '', 
            error: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
        if (nextProps.loggedIn) {
            this.props.history.push('/account');
        }
    }

    handleLogin(e) {
        e.preventDefault();
        console.log('handleLogin', this.props)
        this.props.actions.loginUser(this.state.email, this.state.password);
        
        if(!this.state.email) {
            return this.setState({ error: 'User email is required'})
        }
        if(!this.state.password) {
            return this.setState({ error: 'User password is required'})
        }

        return this.setState({ error: '' });
    }

    handleSignup(e) {
        e.preventDefault();
        console.log('handleSignup', this.props);
        this.props.actions.signupUser(this.state.email, this.state.password);
        
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

                <form onSubmit={this.handleLogin}>
                   
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />

                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <button type="submit">Log In</button>
                </form>

                <Button id='signUpButton' label="Sign Up" onClick={this.handleSignup}/>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            loggedIn: state.users.loggedIn
        }
    },
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
  )(withRouter(LoginForm));