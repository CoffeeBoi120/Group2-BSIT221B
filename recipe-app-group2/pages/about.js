import React from 'react';
import styles from "@/styles/aboutstyle.module.scss";


function About() {
    return (
        <div className={styles.about}>

          <div className={styles.aboveborder}>
                <img src="static/images/topborder.jpg" className={styles.img2} alt="Logo" />
          </div>

          <div className={styles.aboutcontainer}>

              <div className={styles.leftcont}>
                  <p>Nice to meet you!!</p>
              </div>

              <div className={styles.rightcont}>
                  <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
              </div>
              
          </div>


          <div className={styles.bottomborder}>
                <img src="static/images/bottomborder.jpg" className={styles.img2} alt="Logo" />
          </div>
            
        </div>
    );
}

export default About;

  About.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }
