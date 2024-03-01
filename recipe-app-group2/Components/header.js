import React from 'react';


function Header() {
    



    return (
        <header className="navbar"> {}
            <div class="logo">
                <a href= "/"> <img src="static/images/desertdelightlogo.png" alt="Logo" onclick="appearP1()"/> </a>
            </div>
            <nav className="navmenu"> {}
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/recipelist">Recipes</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </header>
    );
}

export default Header