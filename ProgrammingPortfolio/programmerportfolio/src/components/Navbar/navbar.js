import React from "react";
import './navbar.css'

function Navbar(){
    return(
        <div className="navigationbars">
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}

export default Navbar;
