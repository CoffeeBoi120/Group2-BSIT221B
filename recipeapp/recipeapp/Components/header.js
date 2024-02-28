import React from 'react';


function Header() {
    return (
        <header className="navbar"> {}
            <div class="logo">
                <img src="images/desertdelightlogo.png" alt="Logo"/>
            </div>
            <nav className="navmenu"> {}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
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