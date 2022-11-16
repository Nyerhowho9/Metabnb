import React from "react";
import { Component } from "react";
import filt from '../images/filter-icon.png';


class Filters extends Component{
    render(){
        return <div className="filter">
            <div className="filterCont d-flex justify-content-between">
                <a href="#">Restaurant</a>
                <a href="#">Cottage</a>
                <a href="#">Castle</a>
                <a href="#">fantast city</a>
                <a href="#">beach</a>
                <a href="#">Carbins</a>
                <a href="#">Off-grid</a>
                <a href="#">Farm</a>
                <button className="">Location <img src={filt} alt="" className="img-fluid"/></button>
            </div>
        </div>;
    }
}

export default Filters;