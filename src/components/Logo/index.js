import React from 'react';

import styles from './styles.css';

const logo = 'https://s3.amazonaws.com/pennmanoredu-production/wp-content/uploads/sites/9/2015/03/reminder-300x224.gif';

const Logo = () => {
    return (
        <a className={styles.Logo} href="/home">
            <img alt="logo" className={styles.Logo__image} src={logo} />
        </a>
    );
};

export default Logo;