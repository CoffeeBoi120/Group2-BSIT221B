import React from 'react';
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
       <a> <img src=" /static/images/homepagebg.png" alt=""/> </a>
        
          <div class="indexlogo">
            <a> <img src="static/images/desertdelightlogo.png" alt="Logo"/> </a>
          </div>
        

        <div class="indexcontent">
          <div class="homebox">
            <p>"Indulge in the symphony of sweetness, for in every bite of dessert, we find a delightful harmony of joy and satisfaction."</p>
          
            <a href="/recipelist" >
              <ButtonExampleAnimated className="hoverable-button"/>
            </a>
          </div>
        </div>
      </div>
    

    
      
    </>
  )
}
export default Main;