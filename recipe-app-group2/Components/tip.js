// Tip.js

import React from 'react';
import styles from "@/styles/tipstyles.module.scss";

function Tip({ text, imageSrc, alt }) {
    return (
        <div className={styles.tip}>
            <div className={styles.left}>
                <p>{text}</p>
            </div>
            <div className={styles.right}>
                <img src={imageSrc} className={styles.img} alt={alt} />
            </div>
            
        </div>
    );
}


function Problems({ text, imageSrc, alt }) {
  
    return (
        <div className={styles.problem}>
            <div className={styles.left}>
                <img src={imageSrc} className={styles.img} alt={alt} />
            </div>
            <div className={styles.right}>
                <p>{text}</p>
            </div>
            
        </div>
    );
}

export  { Tip, Problems };
