import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Button = ({ id, onClick, label }) => {
    return (
        <button 
            id={id} 
            className={styles.Button} 
            onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func,
    label: PropTypes.string
}

export default Button;