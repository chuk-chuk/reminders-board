import React from 'react';

import Logo from '../Logo';

import styles from './styles.scss';

const Header = () => {
  const title = 'Reminder Board Header';

  return (
      <header className={styles.Header} aria-label="main header">
          <div className={styles.Header__logo}>
              <Logo />
          </div>

          <div className={styles.Header__title}>
              {title}
          </div>
      </header>
  );
};

export default Header;
