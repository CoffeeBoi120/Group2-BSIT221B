import React from 'react';
import styles from "@/styles/explorestyle.module.scss";
import {Tip,Problems} from '@/Components/tip';

function Explore() {
    return(
   
      <div className={styles.explore}>


        <div className={styles.exploretopborder}> 
          <img src="/static/images/topborder.jpg" alt="" />
        </div>

            <div className={styles.title}> 
                <h1>  Baking Tips</h1>
            </div>

            <div className={styles.tips}>
                <Tip
                    text="Read the Recipe Thoroughly: Before starting, read the recipe from start to finish to understand the steps and ingredients required."
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                />
                <Tip
                    text="Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking."
                    imageSrc="/static/images/exploreimg2.jpg"
                    alt="Logo"
                />
                <Tip
                    text="Measure Ingredients Properly: Use a kitchen scale for precise measurements, especially for flour and sugar."
                    imageSrc="/static/images/exploreimg3.jpg"
                    alt="Logo"
                />
                <Tip
                    text="Preheat the Oven: Always preheat your oven to the specified temperature before baking to ensure consistent results."
                    imageSrc="/static/images/exploreimg4.jpeg"
                    alt="Logo"
                />
                <Tip
                    text="Rotate Baking Sheets: Rotate baking sheets halfway through baking to ensure even browning and cooking."
                    imageSrc="/static/images/exploreimg5.webp"
                    alt="Logo"
                />
                <Tip
                    text="Test for Doneness: Use toothpicks or cake testers to check if baked goods are done. Insert into the center, and if it comes out clean, they're ready."
                    imageSrc="/static/images/exploreimg6.jpg"
                    alt="Logo"
                />
                <Tip
                    text="Cool Baked Goods Properly: Allow baked goods to cool in the pan for a few minutes before transferring them to a wire rack to cool completely."
                    imageSrc="/static/images/exploreimg7.png"
                    alt="Logo"
                />
                <Tip
                    text="Store Baked Goods Correctly: Store baked goods in airtight containers to maintain freshness."
                    imageSrc="/static/images/exploreimg8.webp"
                    alt="Logo"
                />
                <Tip
                    text="Practice Patience: Baking requires precision and patience. Don't rush through steps or skip resting times."
                    imageSrc="/static/images/exploreimg9.png"
                    alt="Logo"
                />
                <Tip
                    text="Experiment and Have Fun: Baking is an art and a science. Don't be afraid to experiment with flavors and techniques."
                    imageSrc="/static/images/exploreimg10.jpg"
                    alt="Logo"
                />
                
            </div>

            <div className={styles.middleborder}>
                <img src="/static/images/topborder.jpg" alt="" />
            </div>

           
    

            <div className={styles.title}> 
                <h1>Common Baking Problems</h1>
            </div>

            <div className={styles.problem}>
                <Problems
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                    text="Flat Cakes or Muffins: Overmixing the batter or using expired leavening agents can cause cakes and muffins to become flat."
                />
                <Problems
                    imageSrc="/static/images/exploreimg2.jpg"
                    alt="Logo"
                    text="Cracked Cheesecakes: Overmixing the cheesecake batter or baking at too high a temperature can lead to cracks."
                />
                <Problems
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                    text="Burnt Cookies: Overbaking cookies or baking at too high a temperature can cause them to burn."
                />
                <Problems
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                    text="Soggy Bottoms: Underbaked pastries or pies can result in soggy bottoms. Blind baking crusts before filling can help prevent this."
                />
                <Problems
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                    text="Tough Bread: Over-kneading or using too much flour can result in tough bread."
                   
                />
                <Problems
                    imageSrc="/static/images/exploreimg1.webp"
                    alt="Logo"
                    text="Sunken Cakes: Opening the oven door too soon or using expired leavening agents can cause cakes to sink in the middle."
                />
                
                
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