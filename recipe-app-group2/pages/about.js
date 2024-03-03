import React from 'react';
import styles from "@/styles/aboutstyle.module.scss";


function About() {
    return (
        <div className={styles.aboutcontainer}>

          <div className={styles.abovecont}>
                <img src="static/images/topborder.jpg" className={styles.img2} alt="Logo" />
          </div>

          <div className={styles.aboutmaincomp}>

              <div className={styles.leftcont}>
                  <p>Nice to meet you!!</p>
              </div>

              <div className={styles.rightcont}>
                  <img src="static/images/eatdess.jpg" className={styles.img} alt="Logo" />
              </div>
              
          </div>


          <div className={styles.botcont}>
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
