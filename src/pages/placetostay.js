import React, { Component } from "react";
import Header from "../components/header";
import Places from "../components/places";
import Footer from "../components/footer";
import Filters from "../components/filters";

function Placetostay() {
    return <div className="home ">
        <Header/>
        <Filters/>
        <Places/>
        <Footer/>

    </div>;
  }

export default Placetostay;