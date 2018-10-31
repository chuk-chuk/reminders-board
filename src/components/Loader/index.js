import React from 'react';

import styles from './styles.scss';

const Loader = ({ children, loading }) => (
  <div className={styles.Loader}>
      {loading ? <><img className={styles.Loader__spinner} alt='spinner' 
      src='https://media2.giphy.com/media/8RyJliVfFM6ac/giphy.gif?cid=3640f6095bcf80134f444533515529e3'/>
      <p className={styles.Loader__text}>Loading the app ...</p></> : children
      }   
  </div>
);

export default Loader;