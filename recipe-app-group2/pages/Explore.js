import React from 'react';
import styles from "@/styles/explorestyle.module.scss";
import Background from '@/Components/backgroundimg';
import Head from 'next/head';
import {Topborder,Middleborder,Bottomborder } from '@/Components/border';

const tipsData = [
    {
        text:"Read the Recipe Thoroughly: Before starting, read the recipe from start to finish to understand the steps and ingredients required.",
        imageSrc:"/static/images/exploreimg1.webp",
        alt:"Baking Tip 1"
    },
    {
        text:"Use Room Temperature Ingredients: Many recipes call for room temperature eggs, butter, and dairy to ensure proper incorporation and even baking.",
        imageSrc:"/static/images/exploreimg2.jpg",
        alt:"Baking Tip 1"
    },
    {
        text:"Measure Ingredients Properly: Use a kitchen scale for precise measurements, especially for flour and sugar.",
        imageSrc:"/static/images/exploreimg3.jpg",
        alt:"Baking Tip 1"
    },
    {
        text:"Preheat the Oven: Always preheat your oven to the specified temperature before baking to ensure consistent results.",
        imageSrc:"/static/images/exploreimg4.jpeg",
        alt:"Baking Tip 1"
    },
    {
        text: "Rotate Baking Sheets: Rotate baking sheets halfway through baking to ensure even browning and cooking.",
        imageSrc: "/static/images/exploreimg5.webp",
        alt: "Baking Tip 1"
    },
    {
        text: "Test for Doneness: Use toothpicks or cake testers to check if baked goods are done. Insert into the center, and if it comes out clean, they're ready.",
        imageSrc: "/static/images/exploreimg6.jpg",
        alt: "Baking Tip 1"
    },
    {
        text: "Cool Baked Goods Properly: Allow baked goods to cool in the pan for a few minutes before transferring them to a wire rack to cool completely.",
        imageSrc: "/static/images/exploreimg7.png",
        alt: "Baking Tip 1"

    },
    {
        text: "Store Baked Goods Correctly: Store baked goods in airtight containers to maintain freshness.",
        imageSrc: "/static/images/exploreimg8.webp",
        alt: "Baking Tip 1"
    },
    {
        text: "Practice Patience: Baking requires precision and patience. Don't rush through steps or skip resting times.",
        imageSrc: "/static/images/exploreimg9.png",
        alt: "Baking Tip 1"
    },
    {
        text: "Experiment and Have Fun: Baking is an art and a science. Don't be afraid to experiment with flavors and techniques.",
        imageSrc: "/static/images/exploreimg10.jpg",
        alt: "Baking Tip 1"
    },
  ];
  
  const problemsData = [
    {
        imageSrc: "/static/images/prob1.jpg",
        alt: "Logo",
        text: "Flat Cakes or Muffins: Overmixing the batter or using expired leavening agents can cause cakes and muffins to become flat."
    },
    {
        imageSrc: "/static/images/prob2.jpg",
        alt: "Logo",
        text: "Cracked Cheesecakes: Overmixing the cheesecake batter or baking at too high a temperature can lead to cracks."
    },
    {
        imageSrc: "/static/images/prob3.jpg",
        alt: "Logo",
        text: "Burnt Cookies: Overbaking cookies or baking at too high a temperature can cause them to burn."
    },
    {
        imageSrc: "/static/images/prob4.jpg",
        alt: "Logo",
        text: "Soggy Bottoms: Underbaked pastries or pies can result in soggy bottoms. Blind baking crusts before filling can help prevent this."
    },
    {
        imageSrc: "/static/images/prob5.jpg",
        alt: "Logo",
        text: "Tough Bread: Over-kneading or using too much flour can result in tough bread."
    },
    {
        imageSrc: "/static/images/prob6.jpg",
        alt: "Logo",
        text: "Sunken Cakes: Opening the oven door too soon or using expired leavening agents can cause cakes to sink in the middle."
    },
  ];

// Reusable component for Tip or Problem
function AdviceCard({ text, imageSrc, alt }) {
    return (
      <div>
        <img src={imageSrc} alt={alt} />
        <p>{text}</p>
      </div>
    );
  }
  

function Explore() {
    return(
        <>
        <Head>
      <title>Explore</title>
      <meta name="Explore Page" content="Explore more tips related to dessert making!"></meta>
      </Head>
   
      <div className={styles.explore}>
        <Background/>

        <Topborder/>

            <div className={styles.title}> 
                <h1>Baking Tips</h1>
            </div>

            <div className={styles.tips}>
             {tipsData.map((tip, index) => (
             <AdviceCard key={index} {...tip} />
              ))}
            </div>

            <Middleborder/>

            <div className={styles.title}> 
                <h1>Common Baking Problems</h1>
            </div>

            <div className={styles.problem}>
             {problemsData.map((problem, index) => (
             <AdviceCard key={index} {...problem} />
             ))}
            </div>
            <Bottomborder/>

      </div>
      </>
    
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