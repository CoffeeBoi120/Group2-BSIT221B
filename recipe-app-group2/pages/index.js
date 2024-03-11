import React from 'react';
import styles from "@/styles/indexstyle.module.scss";
import {ButtonExampleAnimated} from '/Components/semantic';
import Head from 'next/head';

function Main() {
  
  return(
    <>  
      <Head>
     <title>Dessert Delights</title>
     <meta name="Landing Page" content="Landing Page of website"></meta>
     </Head>

     <div className="indexcontainer">
      <div className='bg' style={{ backgroundImage: 'url("/static/images/homepagebg.png")' }}>
        <div class="navbar1">
          <div class="indexlogo">
            <a href= "/"> <img src="static/images/desertdelightlogo.png" alt="Logo"/> </a>
          </div>
        </div>

        <div class="indexcontent">
          <div class="homebox">
            <p>"Indulge in the symphony of sweetness, for in every bite of dessert, we find a delightful harmony of joy and satisfaction."</p>
            <a href="/recipelist" >
              <ButtonExampleAnimated />
            </a>
          </div>
        </div>
      </div>
    </div>

    
      
    </>
  )
}
export default Main;