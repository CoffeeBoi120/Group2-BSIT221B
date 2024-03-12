import React from 'react';
import styles from '../styles/loading.module.scss';

function Loading() {
  return (
    <div className={styles.Loading1} id="Loading">
      <video src="/static/images/Loadingcake.mp4" 
      alt="Loading animation: 2 desserts sliding in frame"
      muted
      autoPlay
      loop />
    </div>
  );
}

export default Loading;
