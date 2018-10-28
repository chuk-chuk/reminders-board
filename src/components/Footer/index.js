import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Footer = () => {
  return (
      <footer className={styles.Footer} aria-label="main footer">
          <div className={styles['Footer__content']}>
              Footer to be moved to the bottom of the page pls!
          </div>
      </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
