import React, { Component } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Brands from "../components/brands";
import Main from "../components/main";
import Bottom from "../components/bottom";
import Footer from "../components/footer";

function Home() {
    return <div className="home ">
        <Header/>
        <Hero/>
        <Brands/>
        <Main/>
        <Bottom/>
        <Footer/>

    </div>;
  }

export default Home;