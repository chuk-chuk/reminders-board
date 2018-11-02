import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm';

import styles from './styles.scss';

class Welcome extends Component {
    render() {
        return (
            <div className={styles.Application}>
                <header className={styles['Application__header']}>
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