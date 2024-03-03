import React from 'react';
import styles from '../styles/loading.module.scss';

function Loading() {
    return(
        <>

            <div className={styles.Loading1} id="Loading">
                <img src="/static/images/dessertloading.gif" alt=""></img>
            </div>
        </>
    ) 
}

export default Loading