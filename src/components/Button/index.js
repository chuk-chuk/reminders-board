import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Button = ({ id, onClick, label }) => {
    return (
        <div>
            <button className={styles.Btn}
            id={id} 
            className={styles.Button} 
            onClick={onClick}>
            {label}
            </button>
        </div>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func,
    label: PropTypes.string
}

export default Button;