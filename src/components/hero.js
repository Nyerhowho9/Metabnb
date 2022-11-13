import React from "react";
import { Component } from "react";

class Hero extends Component{

    render(){
        return <div>
            <div className="hero-text">
                <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div>
                    <input type="text" placeholder="Search for location" />
                    <button className="searchbtn">Search</button>
                </div>
            </div>
            <div className="hero-img"></div>
        </div>;
    }
}

export default Hero;