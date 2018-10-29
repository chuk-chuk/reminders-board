import React, { Component } from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import DisplayAllReminders from '../../journey/DisplayAllReminders';

import styles from './styles.css';

class MyAccount extends Component {
    render() {
        const labelLogOut = 'Click to log out';

        return (
            <div className={styles.MyAccount}>
            <Header/>
                <Button id='myAccountButton' label={labelLogOut} onClick={this.handleClick}/>
                <div className={styles.YesNoQuestion}>
                    <h2>
                        Do you want to pin a message Dear Mr/Mrs name?
                    </h2>
                    <Button id='yesAnswer' label='Yes' onClick={this.handleCollapsibleForm}/>
                </div>

                <div>
                    <div className={styles.panelStyle}>
                        <form onSubmit="return false;">
                            Text:<input type="text" name="text" placeholder="Type your message here" /> <br />
                            Expires by:<input type="text" name="expiredBy" placeholder="2018-12-08" /> <br />
                            <button >Save Reminder</button>
                        </form>
                    </div>
                </div>

                <DisplayAllReminders />
    
            </div>
        )
    }
}

export default MyAccount;