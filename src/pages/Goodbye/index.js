import React, { Component } from 'react';

import styles from './styles.css';

class Goodbye extends Component {
    render() {
        return (
            <div className={styles.Wrapper}>
                <h2>
                    Bye, see you soon <span role="img" aria-label="emoji">🔖</span>
                </h2>
            </div>
        )
    }
}

export default  Goodbye;