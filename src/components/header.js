import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import Modal from "./modal";
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
                    <Link to="/">Home</Link>
                    <Link to="places">Place to stay</Link>
                    <a href="#">NFTs</a>
                    <a href="#">Community</a>
                </div>
                <div className="hbtn">
                    <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#myModal">Connect wallet</button>
                </div>
                
            </nav>
            
        <Modal/>
           
        </div>;
    }
}

export default Header;