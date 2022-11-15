import React, { Component } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Brands from "../components/brands";
import Main from "../components/main";

function Home() {
    return <div className="home ">
        <Header/>
        <Hero/>
        <Brands/>
        <Main/>

    </div>;
  }

export default Home;