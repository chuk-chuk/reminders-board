import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.Copyright}>
                <p>@ pumpkin design studio</p>
            </div>

            <div className={styles.Social}>
                <a href="#" className={styles.Support}>yulia@yulia.co.uk</a>
                <a href="#" className={styles.Face}>f</a>
                <a href="#" className={styles.Tweet}>t</a>
                <a href="#" className={styles.Linked}>in</a>
            </div>
        </footer>
    );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;