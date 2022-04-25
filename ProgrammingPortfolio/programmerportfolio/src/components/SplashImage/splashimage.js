import React from "react";
import './splashimage.css'
import linus from './images/maxresdefault.jpg'
import Skills from "./skills";
import Education from "./education";
import Position from "./position";

function SplashImage(){
    return(
        <div className="SplashImageParent">
            <div className="splashtext">
                <h1>Muhammad Sabeeh</h1>
                <Education />
                <Position />
                <Skills />
            </div>
            <div className="splashImage">
                <img id="linusbois" src={linus}></img>
            </div>
        </div>
    );
}

export default SplashImage;