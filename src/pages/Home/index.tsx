import React from "react";
import AboutEvent from "../../components/AboutEvent";

import AboutLocation from "../../components/AboutLocation";
import Countdown from "../../components/Countdown";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import Header from "../../components/Header" ;
import Sponsors from "../../components/Sponsors";
import Testimonials from "../../components/Testimonials";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from "react-reveal/Zoom"
import Carousel from "../../components/Carousel";


export default function Home() {
    return (
        <div className="home">
            <Fade>
                <Header buttonText={"Apply for funding"} handleBtnClick={() => alert("testing")} title={"IEEE R8 SYP CONGRESS"} mode="HOMEPAGE" description="Student and Young Professional Congress is the largest student event in all Region 8" />  
            </Fade>
            <Zoom>
                <AboutEvent />
            </Zoom>
            <Fade>
                <Location />
            </Fade>
            <Fade>
                <Countdown />
            </Fade>
            <Carousel />
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