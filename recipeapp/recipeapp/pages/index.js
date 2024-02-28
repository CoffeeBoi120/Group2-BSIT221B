
function Main() {
  return(
    <>        
      <div className="indexcontainer">
        <div class="navbar1">
            <div class="indexlogo">
            <a href= "/"> <img src="images/desertdelightlogo.png" alt="Logo"/> </a>
            </div>
            <div class="indexnavmenu">
                <ul>
                    <li><a href="/recipelist">Recipes</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>

        <div class="indexcontent">
            <div class="homebox">
                <p>"Indulge in the symphony of sweetness, for in every bite of dessert, we find a delightful harmony of joy and satisfaction."</p>
                <a href="/home" className="hoverable-button">Learn More</a>
            </div>
        </div>
      </div>

    
      
    </>
  )
}
export default Main