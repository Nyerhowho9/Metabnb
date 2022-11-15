import React from "react";
import { Component } from "react";
import '../styles/main.css';
import MB from '../images/mbtoken.svg';
import MM from '../images/metamask.svg';
import sea from '../images/opensea.svg';

class Brands extends Component{
    render(){
        return <div className="brands">
        <div className="brand mb">
            <img src={MB} className="img-fluid" alt="MBToken logo" />
        </div>
        <div className="brand meta ">
            <img src={MM} className="img-fluid" alt="MBToken logo" />
        </div>
        <div className="brand sea">
            <img src={sea} className="img-fluid" alt="MBToken logo" />
        </div>
    </div>
    }
}

export default Brands;