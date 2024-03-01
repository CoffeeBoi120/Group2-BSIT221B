import React, { useEffect } from 'react';

function LoadingScreen() {
    useEffect(() => {
      function appearP2() {
        var Loading = document.querySelector('.Loading');
        var Loading2 = document.querySelector('.Loading2');
        var Loading3 = document.querySelector('.Loading3');
        var Home = document.querySelector('.Home');
        var Main = document.querySelector('.Main');
      
        // Hide Mainpage immediately
        Main.style.display = 'none';
      
        // Add a class to trigger the animation
        Loading.style.left = "0";
        Loading2.style.left = "0";
        Loading3.style.left = "0";
      
        // After 3000 ms (3 seconds), execute the following code
        setTimeout(function () {
            // Reset positions of loading elements
            Loading.style.left = "-100%";
            Loading2.style.left = "-100%";
            Loading3.style.left = "-100%";
      
            // Show Mainpage when the transition to Loading3 is complete
            Main.style.display = 'block';
        }, 3000);
      }
      
      function appearP1() {
        var Loading = document.querySelector('.Loading');
        var Loading2 = document.querySelector('.Loading2');
        var Loading3 = document.querySelector('.Loading3');
        var Home = document.querySelector('.Home');
        var Main = document.querySelector('.Main');
      
        // Hide Mainpage immediately
        Main.style.display = 'none';
      
        // Add a class to trigger the animation
        Loading.style.left = "0";
        Loading2.style.left = "0";
        Loading3.style.left = "0";
      
        // After 3000 ms (3 seconds), execute the following code
        setTimeout(function () {
            // Reset positions of loading elements
            Loading.style.left = "-100%";
            Loading2.style.left = "-100%";
            Loading3.style.left = "-100%";
      
            // Show Mainpage when the transition to Loading3 is complete
            Home.style.display = 'block';
        }, 3000);
      }
      
      // Call one of the functions to trigger the loading animation logic
      appearP2(); // or appearP2();
    }, []);

   
}
  
  
  export default LoadingScreen;