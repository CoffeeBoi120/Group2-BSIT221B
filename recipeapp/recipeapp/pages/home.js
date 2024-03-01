import React, { useState } from 'react';
import LoadingScreen from '@/Components/loading';
import { useRouter } from 'next/router';

function Home() {

  
    return(
      <>
        <div className="Main">
              <div className="Loading3" id="Loading3"></div>
              <div className="Loading2" id="Loading2"></div>
              <div className="Loading" id="Loading">
                <img src="images/com-cut-unscreen.gif" alt=""/>
              </div>
        </div>
      
      </>
    )
  }
  export default Home;