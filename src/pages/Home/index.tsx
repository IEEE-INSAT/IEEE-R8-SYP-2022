import React from "react";
import AboutEvent from "../../components/AboutEvent";

import AboutLocation from "../../components/AboutLocation";

import Footer from "../../components/Footer";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import Testimonials from "../../components/Testimonials";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';

export default function Home() {
    return (
        <div>
            <Header />
            <AboutEvent />
            <AboutLocation />
            <Sponsors items={sponsorsList["sponsors"]}/>
            <Testimonials />

        </div>
    )
}