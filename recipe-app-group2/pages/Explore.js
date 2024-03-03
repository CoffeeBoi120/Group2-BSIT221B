import React from 'react';
import styles from "@/styles/explorestyle.module.scss";

function Explore() {
    return(
   
      <div className={styles.explore}>

        <div className={styles.icons}>
          <img src="/static/images/cakeicon.png" alt="" />
          <img src="/static/images/chocolateicon.png" alt="" />
          <img src="/static/images/cookieicon.png" alt="" />
          <img src="/static/images/whiskicon.png" alt="" />
        </div>

        <div className={styles.exploretopborder}> 
          <img src="/static/images/topborder.jpg" alt="" />
        </div>

        <div className={styles.tips}>


        </div>

        <div className={styles.exploretopborder}> 
          <img src="/static/images/bottomborder.jpg" alt="" />
        </div>

      </div>
    
    );
  }
  export default Explore;

  Explore.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }