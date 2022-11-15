import React from "react";
import { Component } from "react";

class Footer extends Component{
    render(){
        return <div className="footer">
            <div className="row">
                <div className="col-md-3 col-sm-6">1</div>
                <div className="col-md-3 col-sm-6">2</div>
                <div className="col-md-3 col-sm-6">3</div>
                <div className="col-md-3 col-sm-6">4</div>
            </div>
            <div className="row">
            <div className="col-12">trademark</div>
            </div>
        </div>;
    }
}

export default Footer;