import React, { useState } from 'react';
import "@/styles/Home.module.css";

function Home() {
    return(
      <>
         <div className="Main">
              <div className="cont1">
                 <img src="static/images/homepagebg.png" id="headerpic" alt="Logo"/> 
              </div>
          <div className="cont2">
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className="cont3">
            <a href= "/"> <img src="border" alt="Logo"/> </a>
          </div>
        </div>
      
      </>
    )
  }
  export default Home

  Home.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }