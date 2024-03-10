import SearchComponent from '@/Components/searchcomponent';
import recipeData from '@/Components/recipe.json';
import styles from '@/styles/headerstyle.module.scss';
import React, { useState } from 'react';



function Header (){

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility
    };

    const handleHideSidebar = () => {
        setIsSidebarVisible(false); // Hide the sidebar
    };



    return (
        <header className="navbar"> {}
            <nav> 
                <div className='navcont'>
                    <div className={styles.logo}>
                        <a href= "/"> <img src="static/images/desertdelightlogo.png" alt="Logo" /> </a>
                    </div>

                    <div className='toggle' >
                        <a href="#" onClick={handleToggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="70"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" style={{ fill: '#fff' }}/></svg></a>
                    </div>
                
                        <ul className='nav-item'>
                            <li class="hideonmobile"><a href="/recipelist" class="nav-item">Recipes</a></li>
                            <li class="hideonmobile"><a href="/explore" class="nav-item">Explore</a></li>
                            <li class="hideonmobile"><a href="/about" class="nav-item">About</a></li>
                        </ul>
                 
                    <div className="search-bar nav-item hideonmobile">
                        <SearchComponent data={recipeData} />
                    </div>
                </div>
            </nav>

            <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
                 <ul className='nav-side'> 
                    <li class="exit">
                        <a href="#" onClick={handleHideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="70"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" style={{ fill: '#fff' }}/></svg></a></li>
                    <li>< a href= "/index"> <img src="static/images/desertdelightlogo.png" alt="logo-sidebar" /> </a></li> 
                    <li className="search-barmob hideonmobile"> 
                        <SearchComponent data={recipeData} /> 
                    </li> 
                    <li class="hideonwindow"><a href="/recipelist">Recipes</a></li> 
                    <li class="hideonwindow"><a href="/explore">Explore</a></li>
                    <li class="hideonwindow"><a href="/about">About</a></li> 
                </ul> 
            </div>

        </header>
    );
}

export default Header
