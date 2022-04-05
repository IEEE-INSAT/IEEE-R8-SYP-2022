import React from "react";
import AboutEvent from "../../components/AboutEvent";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import Testimonials from "../../components/Testimonials";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';

export default function Home() {
    return (
        <div>
            <Sponsors items={sponsorsList["sponsors"]}/>
        </div>
    )
}