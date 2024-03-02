import React from 'react';
import styles from '../styles/loading.module.css';

function Loading() {
    return(
        <>
            <div className={styles.Loading3} id="Loading3"></div>

            <div className={styles.Loading2} id="Loading2"></div>

            <div className={styles.Loading1} id="Loading">
                <img src="/static/images/dessertloading.gif" alt=""></img>
            </div>
        </>
    ) 
}

export default Loading