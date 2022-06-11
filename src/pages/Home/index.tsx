import React from "react";
import AboutEvent from "../../components/AboutEvent";

import AboutLocation from "../../components/AboutLocation";
import Countdown from "../../components/Countdown";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import sponsorsList from "../../data/sponsors.json";

import './Home.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from "react-reveal/Zoom"
import PoweredBy from "../../components/PoweredBy";


const HeaderDescription = () => (<>
    <p className="date">See you from the 3rd to the 7th of August 2022 in Tunisia</p>
    <p>Student and Young Professional Congress is the largest student and young professionals event in Region 8</p>
    </>
)

export default function Home() {
    return (
        <div className="home">
                <Header buttonText={"Apply for funding"} title={"IEEE R8 SYP CONGRESS"} mode="HOMEPAGE" description={<HeaderDescription />}   />
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
                <PoweredBy />
            </Fade>
            <Fade >
                <Sponsors items={sponsorsList} />
            </Fade>
            <Footer />
        </div>
    )
}