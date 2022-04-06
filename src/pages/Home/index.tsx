import React from "react";
import AboutEvent from "../../components/AboutEvent";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import Testimonials from "../../components/Testimonials";
import Location from "../../components/Location";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';

export default function Home(){
    return (
        <div>
            <Location/>
            <Testimonials/>
            <Sponsors items={sponsorsList["sponsors"]}/>
        </div>
    )
}