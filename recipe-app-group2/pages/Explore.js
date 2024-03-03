import React from 'react';
import styles from "@/styles/Home.module.css";

function Explore() {
    return(
   
      <div className={styles.explorecontainer}>
        <div className={styles.icons}>


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
    
    )
  }
  export default Explore

  Explore.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }