import React from "react";
import AboutEvent from "../../components/AboutEvent";
import AboutLocation from "../../components/AboutLocation";
import Header from "../../components/Header" ;
import './Home.css';

export default function Home(){
    return (
        <div>
            <Header />
            <AboutEvent />
            <AboutLocation />
        </div>
    )
}