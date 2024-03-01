import React, { useState } from 'react';
import React from 'react';
import styles from './Main.module.css';

function Home({ recipes }) {
    return(
      <>
        <div className={styles.Main}>
          <div className={styles.cont1}>
            <a href= "/"> <img src="/images/mainheader.png" alt="image"/> </a>
          </div>
          <div className={styles.cont2}>
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className={styles.cont3}>
            <a href= "/"> <img src="border" alt="Logo"/> </a>
          </div>
        </div>
      
      </>
    )
  }
  export default Home;