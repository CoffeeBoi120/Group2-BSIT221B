
function Main() {
  
  return(
    <> 

      <div className="indexcontainer">
        <div class="navbar1">
            <div class="indexlogo">
            <a href= "/"> <img src="static/images/desertdelightlogo.png" alt="Logo"/> </a>
            </div>
            <div class="indexnavmenu">
                <ul>
                    <li><a href="/recipelist" class="nav-item" onclick="appearP2()">Recipes</a></li>
                    <li><a href="/services" class="nav-item" onclick="Loading()">Services</a></li>
                    <li><a href="/about" class="nav-item" onclick="Loading()">About</a></li>
                </ul>
            </div>
        </div>

        <div class="indexcontent">
            <div class="homebox">
                <p>"Indulge in the symphony of sweetness, for in every bite of dessert, we find a delightful harmony of joy and satisfaction."</p>
                <a href="/recipelist" className="hoverable-button" onclick="appearP2()">Learn More</a>
            </div>
        </div>
      </div>

    
      
    </>
  )
}
export default Main