import React from "react";
import AboutEvent from "../../components/AboutEvent";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import sponsorsList from "../../data/sponsors.json";
import './Home.css';

export default function Home(){
    return (
        <div>
            <Header />
            <AboutEvent />
            <Sponsors items={sponsorsList["sponsors"]}/>
        </div>
    )
}