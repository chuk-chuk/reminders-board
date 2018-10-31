import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './styles.scss';

const Reminder = ({ text, expiredBy, onClick }) => {
    return (
        <li className={styles.Reminder}
            onClick={onClick}>
            {text}
            {expiredBy}
            <span><Button>Delete me</Button></span>
        </li>
    )
}

Reminder.propTypes = {
    text: PropTypes.string.isRequired,
    expiredBy: PropTypes.string.isRequired
}

export default Reminder;