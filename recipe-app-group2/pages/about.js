import React from 'react';
import styles from "@/styles/Home.module.css"; // Ensure correct path to your CSS module

function About() {
    return (
        <div className={styles.aboutcontainer}>
            
            <div className={styles.leftcont}>
                <p>Nice to meet you!!</p>
            </div>

            <div className={styles.rightcont}>
                <img src="static/images/eatdess.jpg" className={styles.img} alt="Logo" />
            </div>

            <div className={styles.abovecont}>
              <img src="static/images/aboveborder.jpg" className={styles.img2} alt="" />
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
