import React from 'react';
import styles from "@/styles/Home.module.css"; // Ensure correct path to your CSS module

function Explore() {
    return(
   
      <div className={styles.explorecontainer}>
        <p>Explore</p>
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