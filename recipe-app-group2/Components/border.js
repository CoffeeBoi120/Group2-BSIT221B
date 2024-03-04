// Tip.js

import React from 'react';
import styles from "@/styles/borderstyle.module.scss";

function Topborder() {
    return (
       
        <div className={styles.topborder}>
            <img src="/static/images/topbor.png" alt=""></img>
        </div>
            
    
    );
}


function Middleborder() {
  
    return (
        <div className={styles.middleborder}>
            <img src="/static/images/middleborder.png" alt=""></img>
        </div>
    );
}



function Bottomborder() {
  
    return (
        <div className={styles.bottomborder}>
            <img src="/static/images/bottombor.png" alt=""></img>
        </div>
    );
}

export  { Topborder,Middleborder,Bottomborder };

