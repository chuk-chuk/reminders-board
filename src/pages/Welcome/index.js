import React, { Component } from 'react';

import Button from '../../components/Button';

import styles from './styles.css';

class Welcome extends Component {
    render() {
        const labelLogIn = 'Click to login';
        const labelSignIn = 'Click to login';

        return (
            <div className={styles.Application}>
                <header className={styles['Application__header']}>
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/f3/1a/37/f31a3705-2930-81ea-7267-e4ad36118ccb/source/256x256bb.jpg" alt="logo" />
                    <p>
                        Hello! Let's start ... Logged in?
                    </p>
                    <Button id='logInButton' label={labelLogIn} onClick={this.handleClick}/>
                    <Button id='signInButton' label={labelSignIn} onClick={this.handleClick}/>
                </header>
            </div>
        )
    }
}

export default Welcome;