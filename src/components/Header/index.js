import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from '../Logo';
import Button from '../Button';

import * as actions from '../../reducers/users/actions';

import styles from './styles.scss';

class Header extends Component {
    constructor() {
        super();

    this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.actions.logoutUser();
        this.props.history.push('/');
    }

    render() {
        const title = 'Reminder Board Header';

        return (
            <header className={styles.Header} aria-label="main header">
          <div className={styles.Header__logo}>
              <Logo />
          </div>

          <div className={styles.Header__title}>
              {title}
          </div>
        
          <Button id='logOutButton' label='Log Out' onClick={this.handleLogOut}/>

      </header>
        );
    };
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
  )(withRouter(Header));
