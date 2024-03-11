// Tip.js

import React from 'react';
import styles from "@/styles/tipstyles.module.scss";

function Tip({ text, imageSrc, alt }) {
    return (
        <div className={styles.tip}>
            <div className={styles.content}>
                <p className={styles.text}>{text}</p>
                <img src={imageSrc} className={styles.img} alt={alt} />
            </div>
            
        </div>
    );
}


function Problems({ text, imageSrc, alt }) {
  
    return (
        <div className={styles.problem}>
            <div className={styles.content}>
                <img src={imageSrc} className={styles.img} alt={alt} />
                <p>{text}</p>
            </div>
            
        </div>
    );
}

export  { Tip, Problems };
