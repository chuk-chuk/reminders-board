import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Button';


import styles from './styles.scss';
import { authUser } from '../../reducers/users/actions';
import * as actions from '../../reducers/users/actions';

class LoginForm extends Component {
    
    constructor() {
        super();

        this.state = {
            email: '',
            password: '', 
            error: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.loggedIn) {
            this.props.history.push('/account');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.actions.authUser(this.state.email, this.state.password);
        // dispatch(authUser(this.state.email, this.state.password));
        
        //this.props.history.push('/account');
        
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
                   
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />

                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <button type="submit">Log In</button>
                </form>

                <Button id='signUpButton' label="Sign Up" onClick={this.handleSignUp}/>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            loggedIn: state.loggedIn
        }
    },
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
  )(withRouter(LoginForm));