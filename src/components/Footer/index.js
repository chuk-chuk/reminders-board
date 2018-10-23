import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Footer = ({ children }) => {
  return (
      <footer className={styles['Footer']} aria-label="main footer">
          <div className={styles['Footer__content']}>
              {children}
          </div>
      </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
