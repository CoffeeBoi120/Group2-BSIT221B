import React from 'react';
import styles from '../styles/loading.module.scss';

function Loading() {
  return (
    <div className={styles.Loading1} id="Loading">
      <img src="/static/images/dessertloading.gif" alt="Loading animation: 2 desserts sliding in frame" />
    </div>
  );
}

export default Loading;
