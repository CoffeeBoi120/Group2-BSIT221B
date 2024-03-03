// Tip.js

import React from 'react';

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

export default Tip;
