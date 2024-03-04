import React from 'react';
import styles from "@/styles/backgroundimg.module.scss";

function Background() {
    return(
        <>

            <div className={styles.backgroundimg} id="backgroundimg">
                <img src="/static/images/marble.png" alt=""></img>
            </div>
        </>
    ) 
}

export default Background