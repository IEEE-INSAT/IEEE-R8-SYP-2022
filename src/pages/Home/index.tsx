import React from 'react';
import AboutEvent from '../../components/AboutEvent';

import AboutLocation from '../../components/AboutLocation';
import Countdown from '../../components/Countdown';
import Location from '../../components/Location';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sponsors from '../../components/Sponsors';
import partnersList from '../../data/sponsors and partners/partners.json';
import sponsorsList from '../../data/sponsors and partners/sponsors.json';
import NumberCounter from '../../components/NumberCounter';
import './Home.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from 'react-reveal/Fade';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import PoweredBy from '../../components/PoweredBy';
import Speakers from '../../components/Speakers';
import {Link} from "react-router-dom";
import ThemedButton from "../../components/ThemedButton";
import speakerList from '../../data/program/speakers.json'

const HeaderDescription = () => (
    <>
        <p className="date">See you from the 3rd to the 7th of August 2022 in Tunisia</p>
        <p>Student and Young Professional Congress is the largest student and young professionals event in Region 8</p>
    </>
);

export default function Home() {
    return (
        <div className="home">
            <Header
                title={'IEEE R8 SYP CONGRESS'}
                mode="HOMEPAGE"
                description={<HeaderDescription/>}
            />
            <Zoom>
                <AboutEvent/>
            </Zoom>
            <Fade>
                <Location/>
            </Fade>
            <Fade>
                <Countdown/>
            </Fade>
            <Zoom>
                <AboutLocation/>
            </Zoom>

            <div className="home-container">
                <Fade>
                    <h4>DISTINGUISHED GUESTS</h4>
                    <h2>More than <NumberCounter number={speakerList.length }/> speakers will be present</h2>
                </Fade>
                <Speakers limit={true}/>
            </div>

            <Fade>.
                <PoweredBy/>
            </Fade>
            <Fade>
                <div className="home-container">
                    <h4>EVENT SPONSORS</h4>
                    <h2>Official Sponsors</h2>
                    <Sponsors items={sponsorsList} types={["Platinum", "Gold","Silver","Bronze"]}/>
                    <p className="sponsors-description">
                        If you want to increase awareness for your company, You’re in the right place !
                    </p>
                    <Link to="/sponsors"><ThemedButton text='CONTACT US' onClick={() => window.scrollTo(0, 0)}
                                                       color='secondary' width='500px'/></Link>
                </div>
            </Fade>
            <Fade>
                <div className="home-container">
                    <h4>EVENT PARTNERS</h4>
                    <h2>IEEE Partners</h2>
                    <Sponsors items={partnersList} types={["Society"]}/></div>
            </Fade>
            <Footer/>
        </div>
    );
}
