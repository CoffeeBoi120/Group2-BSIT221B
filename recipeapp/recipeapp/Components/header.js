import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    return (
        <header className="navbar"> {}
            <div class="logo">
                <a href= "/"> <img src="images/desertdelightlogo.png" alt="Logo"/> </a>
            </div>
            <nav className="navmenu"> {}
                <ul>
                <li className={location.pathname === '/home' ? 'active' : ''}><a href="/home">Home</a></li>
                    <li className={location.pathname === '/recipelist' ? 'active' : ''}><a href="/recipelist">Recipes</a></li>
                    <li className={location.pathname === '/services' ? 'active' : ''}><a href="/services">Services</a></li>
                    <li className={location.pathname === '/about' ? 'active' : ''}><a href="/about">About</a></li>
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