import React from 'react';


function Footer() {
    return(
        <footer className="footercontainer"> {}
       
            <div className="footcont1">
                <img src="static/images/desertdelightlogo.png" id="footerlogo" alt="Logo"/>
            </div>
            
            <div class="footcont2">
                <p> remojojd@students.nu-laguna.edu.ph </p>
                <p> floresel@students.nu-laguna.edu.ph </p>
                <p> aduanasa@students.nu-laguna.edu.ph </p>
                <p> arcitakm@students.nu-laguna.edu.ph </p>
                <p> gacusanabn@students.nu-laguna.edu.ph </p>
                <p> tinaka@students.nu-laguna.edu.ph </p>
            </div>

            <div className="footcont3">
                <div className="social-media-icons">
                    <a href="https://www.facebook.com"><img src="static/images/facebook.png" alt="Facebook"/></a>
                    <a href="https://twitter.com"><img src="static/images/twitter.png" alt="Twitter"/></a>
                    <a href="https://www.instagram.com"><img src="static/images/instagram.png" alt="Instagram"/></a>
                    <a href="https://www.linkedin.com"><img src="static/images/pinterest.png" alt="Pinterest"/></a>
                    <a href="https://www.youtube.com"><img src="static/images/youtube.png" alt="YouTube"/></a>
                </div>
            </div>
       
        </footer>
    ); 
}

export default Footer