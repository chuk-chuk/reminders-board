import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Logo from '../Logo';
import Button from '../Button';

import styles from './styles.scss';

class Header extends Component {
    constructor() {
        super();

    this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.history.push('/goodbye');
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

export default withRouter(Header);
