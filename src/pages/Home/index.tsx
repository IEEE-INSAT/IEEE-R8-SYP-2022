import React from "react";
import AboutEvent from "../../components/AboutEvent";

import AboutLocation from "../../components/AboutLocation";
import Countdown from "../../components/Countdown";

import Footer from "../../components/Footer";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import Testimonials from "../../components/Testimonials";
import Location from "../../components/Location";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';
import {Animated} from "react-animated-css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from "react-reveal/Zoom"


export default function Home() {
    return (
        <div className="home">
            <Animated animationIn="fadeIn" animationOut="fadeIn" isVisible={true}>
                <Header />  
            </Animated>
            <Zoom>
                <AboutEvent />
            </Zoom>
            <Fade>
                <Location />
            </Fade>
            <Fade>
                <Countdown />
            </Fade>
            <Zoom>
                <AboutLocation />
            </Zoom>
            <Fade>
                <Testimonials />
            </Fade>
            <Fade >
                <Sponsors items={sponsorsList["sponsors"]}/>
            </Fade>
            <Footer />
        </div>
    )
}