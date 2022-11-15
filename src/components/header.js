import React from "react";
import { Component } from "react";
import logo from '../images/logo.png';
import '../styles/main.css';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="headerContainer ">
            <nav>
                <div className="logoDiv">
                    <img src={logo} className="img-fluid" alt="Metabnb logo"/>
                </div>
                <div className="navLinks">
                    <a href="#">Home</a>
                    <a href="#">Place to stay</a>
                    <a href="#">NFTs</a>
                    <a href="#">Community</a>
                </div>
                <div className="btn">
                    <button>Connect wallet</button>
                </div>
            </nav>
            
        </div>;
    }
}

export default Header;