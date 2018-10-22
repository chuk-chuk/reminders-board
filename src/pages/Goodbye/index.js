import React, { Component } from 'react';

import './styles.css';

export default class Goodbye extends Component {
    render() {
        return (
            <div>
                <h2>
                    Bye, see you soon <span role="img" aria-label="emoji">🔖</span>
                </h2>
            </div>
        )
    }
}