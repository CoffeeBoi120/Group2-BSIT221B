import React from 'react';
import styles from "@/styles/aboutstyle.module.scss";
import Background from '@/Components/backgroundimg';

function About() {
    return (
        <div className={styles.about}>
          <Background/>
          <div className={styles.aboveborder}>
                <img src="static/images/topbor.png" className={styles.img2} alt="Logo" />
          </div>

          <div className={styles.aboutcontainer}>

            <div className={styles.about1}>

                <div className={styles.top}>
                    <h2>Nice to meet you!!</h2>
                    <p>Indulge in the sweet symphony of flavors and textures that define our delectable desserts. At our dessert haven, every bite is a tantalizing journey through layers of velvety creams, rich chocolates, and delicate pastries. Our passion for crafting exquisite desserts is matched only by our dedication to sourcing the finest ingredients, ensuring each creation is a masterpiece of taste and artistry.</p>
                </div>

                <div className={styles.bot}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.about2}>

                <div className={styles.rightcont}>
                    <img src="static/images/aboutpic1.webp" className={styles.img} alt="Logo" />
                </div>

                <div className={styles.leftcont}>
                    <p>From the timeless elegance of classic cakes to the innovative twists of modern confections, our dessert repertoire spans the spectrum of culinary delights. Whether you're savoring the comforting warmth of a freshly baked cookie or reveling in the intricate beauty of a meticulously crafted tart, each dessert tells a story of craftsmanship, creativity, and above all, pure indulgence.</p>
                </div>
            </div>

            <div className={styles.about3}>

                <div className={styles.rightcont}>
                    <p>Join us on a culinary adventure where every dessert is a celebration of life's sweet moments. Whether shared with loved ones or savored in solitude, our desserts are more than just treats – they're expressions of joy, comfort, and the simple pleasures that make life deliciously memorable.</p>
                </div>

                <div className={styles.leftcont}>
                    <img src="static/images/aboutpic2.png" className={styles.img} alt="Logo" />
                </div>
            </div>

          </div>


          <div className={styles.bottomborder}>
                <img src="static/images/bottombor.png" className={styles.img2} alt="Logo" />
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
