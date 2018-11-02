import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import DisplayAllReminders from '../../journey/DisplayAllReminders';

import styles from './styles.scss';

class MyAccount extends Component {
    constructor() {
        super();

    this.handleCollapsibleForm = this.handleCollapsibleForm.bind(this);
    }

    handleCollapsibleForm() {
        return false;
    }

    render() {

        return (
            <div className={styles.MyAccount}>
            
            <Header/>
                
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

export default withRouter(MyAccount);