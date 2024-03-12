import React from 'react';
import styles from "@/styles/aboutstyle.module.scss";
import Background from '@/Components/backgroundimg';
import Head from 'next/head';
import { Topborder, Bottomborder } from '@/Components/border';

function About() {
    return (
        <>
        <Head>
         <title>About Us</title>
         <meta name="About Dessert Delights" content="Get to Learn more about Dessert Delights"></meta>
         <script src="components/respo.js"></script>
        </Head>
        
        <div className={styles.about}>
          <Background/>

          <Topborder/>
        
            <div className={styles.about1}>
                <div className={styles.content}>
                    <h2>Nice to meet you!!</h2>
                    <p>Indulge in the sweet symphony of flavors and textures that define our delectable desserts. At our dessert haven, every bite is a tantalizing journey through layers of velvety creams, rich chocolates, and delicate pastries. Our passion for crafting exquisite desserts is matched only by our dedication to sourcing the finest ingredients, ensuring each creation is a masterpiece of taste and artistry.</p>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.about2}>
                <div className={styles.content}>
                    <img src="static/images/aboutdessert1.jpg" className={styles.img} alt="Logo" />
                    <p>From the timeless elegance of classic cakes to the innovative twists of modern confections, our dessert repertoire spans the spectrum of culinary delights. Whether you're savoring the comforting warmth of a freshly baked cookie or reveling in the intricate beauty of a meticulously crafted tart, each dessert tells a story of craftsmanship, creativity, and above all, pure indulgence.</p>
                </div>
            </div>

            <div className={styles.about3}>
                <div className={styles.content}>
                    <p>Join us on a culinary adventure where every dessert is a celebration of life's sweet moments. Whether shared with loved ones or savored in solitude, our desserts are more than just treats – they're expressions of joy, comfort, and the simple pleasures that make life deliciously memorable.</p>
                    <img src="static/images/aboutdessert2.webp" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.about4}>
                    <h2>Recommendations</h2>
                    <p>"Indulge your sweet cravings at these top-notch restaurants renowned for their exquisite dessert offerings:</p>
                    
                    <div className={styles.recommendations}>
                        <div className={styles.imageContainer}>
                            <a href="https://www.koidessertbar.com.au/" target="_blank">
                                <img src="static/images/koibar.png" className={styles.img} alt="Koi Bar Image" />
                            </a>
                            <p>Koi</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <a href="https://www.solaireresort.com/dining/oasis-garden-cafe" target="_blank">
                                <img src="static/images/oasisdes.jpg" className={styles.img} alt="Oasides Image" />
                            </a>
                            <p>Oasis Garden Cafe</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <a href="https://eatdrinkhilton.com/bru-coffee-bar-conrad-manila/" target="_blank">
                                <img src="static/images/brucof.jpg" className={styles.img} alt="Bru Coffee Bar Image" />
                            </a>
                            <p>Bru Coffee Bar</p>
                        </div>
                    </div>
            </div>

          <Bottomborder/>
        </div >
        </>
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
