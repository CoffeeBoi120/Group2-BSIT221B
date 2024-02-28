
function Main() {
  return(
    <>        
      <div className="indexcontainer">
        <div class="navbar1">
            <div class="indexlogo">
                <img src="images/desertdelightlogo.png" alt="Logo"/>
            </div>
            <div class="indexnavmenu">
                <ul>
                    <li><a href="/home">Recipes</a></li>
                    <li><a href="/tips">Tips</a></li>
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