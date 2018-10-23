import React, { Component } from 'react';

import Button from '../../components/Button';

import styles from './styles.css';

class MyAccount extends Component {
    render() {
        const label = 'Click to logout';

        return (
            <div className={styles.MyAccount}>
                <h2>
                    What do you want to save today Dear Mr/Mrs name?
                    <Button id='myAccountButton' label={label} onClick={this.handleClick}/>
                </h2>
            </div>
        )
    }
}

export default MyAccount;