import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm';

import styles from './styles.scss';

class Welcome extends Component {
    render() {
        return (
            <div className={styles.Application}>
                <header className={styles['Application__header']}>
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/f3/1a/37/f31a3705-2930-81ea-7267-e4ad36118ccb/source/256x256bb.jpg" alt="logo" />
                    <p>
                        Get started with a free account ... Logged in?
                    </p>
                </header>

                <LoginForm />
                
            </div>
        )
    }
}

export default Welcome;