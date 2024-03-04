import React from 'react';
import SearchComponent from '@/Components/SearchComponent';
import recipeData from '@/Components/recipe.json';


function Header() {

    return (
        <header className="navbar"> {}
            <div class="logo">
                <a href= "/"> <img src="static/images/desertdelightlogo.png" alt="Logo" /> </a>
            </div>
            <nav className="navmenu"> {}
                <ul>
                    <li><a href="/recipelist">Recipes</a></li>
                    <li><a href="/explore">Explore</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div className="search-bar">
            <SearchComponent data={recipeData} />
            </div>
        </header>
    );
}

export default Header