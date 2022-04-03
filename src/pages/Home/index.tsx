import React from "react";
import AboutEvent from "../../components/AboutEvent";
import Header from "../../components/Header" ;
import Location from "../../components/Location"
import './Home.css';

export default function Home(){
    return (
        <div>
            <Header />
            <AboutEvent />
            <Location/>

        </div>
    )
}