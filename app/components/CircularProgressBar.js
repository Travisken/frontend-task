// components/CircularProgressBar.js

import React from 'react';
import styles from '././../styles/CircularProgressBar.module.css';

const CircularProgressBar = ({ progress }) => {
  return (
    <div className={styles.circularProgressBar}>
      <div className={styles.progress} style={{ transform: `rotate(${progress}deg)` }}></div>
    </div>
  );
};

export default CircularProgressBar;
