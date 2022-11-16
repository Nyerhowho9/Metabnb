import React from "react";
import { Component } from "react";
import mm from '../images/metamask.png';
import wc from '../images/walletcon.png';
import arrow from '../images/right-arrow.png';
import '../styles/main.css';

class Modal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="modal" id="myModal" tabindex="-1">
                <div className="modal-dialog" id="myModal">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title ps-3">Connect Wallet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body mbody">
                        <p className="mpara">Choose your preferred wallet:</p>
                        <div className="d-flex flex-column mcont">
                            <button className="mbtn"><img src={mm} alt="metamask icon" className="img-fluid micon"/><span className="ps-4 mspan">Metamask</span> <img src={arrow} alt="arrow" className="img-fluid arr pt-1"/></button>
                            <button className="mbtn wc"><img src={wc} alt="wallet connect icon" className="img-fluid micon"/><span className="ps-4 mspan">Wallet connect</span><img src={arrow} alt="arrow" className="img-fluid arr pt-1"/></button>
                        </div>
                        
                    </div>
                    </div>
                </div>
           
           
            </div>;
    }
}

export default Modal;