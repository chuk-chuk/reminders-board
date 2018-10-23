import React from 'react';

import styles from './styles.css';

const Loader = () => (
  <div className={styles.Loader}>
      <img className={styles.Loader__spinner} alt='spinner' 
      src='https://media2.giphy.com/media/8RyJliVfFM6ac/giphy.gif?cid=3640f6095bcf80134f444533515529e3'/>
      <p className={styles.Loader__text}>Loading the app ...</p>
  </div>
);

export default Loader;