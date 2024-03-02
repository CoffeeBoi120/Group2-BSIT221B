import React from 'react';
import styles from "@/styles/Home.module.css"; // Ensure correct path to your CSS module

function Services() {
    return(
   
      <div className={styles.servicescontainer}>
        <p>Services</p>
      </div>
    
    )
  }
  export default Services

  Services.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }