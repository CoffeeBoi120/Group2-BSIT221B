import React from 'react';
import styles from "@/styles/explorestyle.module.scss";
import Tip from "./tip";

function Explore() {
    return(
   
      <div className={styles.explore}>


        <div className={styles.exploretopborder}> 
          <img src="/static/images/topborder.jpg" alt="" />
        </div>


        <div className={styles.tips}>
                <Tip
                    text="Read the Recipe Thoroughly: Before starting, read the recipe from start to finish to understand the steps and ingredients required."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/eatcookie.gif"
                    alt="Logo"
                />
                
            </div>



          <div className={styles.tips}>

            <div className={styles.tip1}>
                <div className={styles.left}>
                    <p>Read the Recipe Thoroughly: Before starting, read the recipe from start to finish to understand the steps and ingredients required.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.tip2}>
                <div className={styles.left}>
                    <p>Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.tip3}>
                <div className={styles.left}>
                    <p>Measure Ingredients Properly: Use a kitchen scale for precise measurements, especially for flour and sugar.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>

            <div className={styles.tip4}>
                <div className={styles.left}>
                    <p>Preheat the Oven: Always preheat your oven to the specified temperature before baking to ensure consistent results.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
            <div className={styles.tip5}>
                <div className={styles.left}>
                    <p>Rotate Baking Sheets: Rotate baking sheets halfway through baking to ensure even browning and cooking.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div><div className={styles.tip6}>
                <div className={styles.left}>
                    <p>Test for Doneness: Use toothpicks or cake testers to check if baked goods are done. Insert into the center, and if it comes out clean, they're ready.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
            <div className={styles.tip7}>
                <div className={styles.left}>
                    <p>Cool Baked Goods Properly: Allow baked goods to cool in the pan for a few minutes before transferring them to a wire rack to cool completely.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
            <div className={styles.tip8}>
                <div className={styles.left}>
                    <p>Store Baked Goods Correctly: Store baked goods in airtight containers to maintain freshness.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
            <div className={styles.tip9}>
                <div className={styles.left}>
                    <p>Practice Patience: Baking requires precision and patience. Don't rush through steps or skip resting times.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
            <div className={styles.tip10}>
                <div className={styles.left}>
                    <p>Experiment and Have Fun: Baking is an art and a science. Don't be afraid to experiment with flavors and techniques.</p>
                </div>

                <div className={styles.right}>
                    <img src="static/images/eatcookie.gif" className={styles.img} alt="Logo" />
                </div>
            </div>
        </div>

           
        <div className={styles.problems}>
          <p>Common Baking Problems</p>
          <ul>
            <li>Flat Cakes or Muffins: Overmixing the batter or using expired leavening agents can cause cakes and muffins to become flat.</li>
            <li>Cracked Cheesecakes: Overmixing the cheesecake batter or baking at too high a temperature can lead to cracks.</li>
            <li>Burnt Cookies: Overbaking cookies or baking at too high a temperature can cause them to burn.</li>
            <li>Soggy Bottoms: Underbaked pastries or pies can result in soggy bottoms. Blind baking crusts before filling can help prevent this.</li>
            <li>Tough Bread: Over-kneading or using too much flour can result in tough bread.</li>
            <li>Sunken Cakes: Opening the oven door too soon or using expired leavening agents can cause cakes to sink in the middle.</li>
          </ul>
        </div>

        <div className={styles.hacks}> 
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