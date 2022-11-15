import React from "react";
import { Component } from "react";
import star from '../images/stars.png';
import one from '../images/oneA.png';
import two from '../images/2a.png';
import three from '../images/3a.png';
import four from '../images/4a.png';
import five from '../images/5a.png';
import six from '../images/6a.png';
import seven from '../images/7a.png';
import eight from '../images/8a.png';

class Main extends Component{
    render(){
        return <div >
            <div className="row">
                <h2 className=" adv col-12">Inspiration for your next adventure</h2>
            </div>
            <div class="row ">
                <div class="one col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={one} alt="location one"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="two col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={two} alt="location 2"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="three col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={three} alt="location 3"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="four col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={four} alt="location 4"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="five col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={five} alt="location 5"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="six col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={six} alt="location 6"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="seven col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={seven} alt="location 7"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
                <div class="eight col-md-3 col-sm-6">
                    <div className="figDiv">
                        <img src={eight} alt="location 8"/>
                    </div>
                    <div className="capDiv">
                        <div className="cap">
                            <p>Desert king</p>
                            <p>1MB per night</p>
                        </div>
                        <div className="cap">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="stars">
                            <img src={star}/>
                        </div>
                       
                    </div>
                </div>
            </div>
               
            
        </div>;
    }
}

export default Main;