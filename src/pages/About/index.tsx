import './style.css';
import React from "react";
import Header from "../../components/Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import TwoElementsBlock from '../../components/TwoElementsBlock';
import TextBlock from '../../components/TextBlock';
import VideoDisplay from '../../components/VideoDisplay';
import ThemedButton from '../../components/ThemedButton';
import DecoratedImage from '../../components/DecoratedImage';
import Footer from '../../components/Footer';
import SliderSectionAboutUs from '../../components/SliderSectionAboutUs';
import AboutSYPSection from '../../components/AboutSYPSection';
import PoweredBy from '../../components/PoweredBy';
import top_disk from './../../assets/images/browndisk.svg';
import bot_disk from './../../assets/images/bluedisk.svg';
import '../../components/VideoDisplay/style.css';

export default function AboutUs() {
    return (
        <>

            <Header title={"ABOUT US"} description="Know more about us" />
            <TwoElementsBlock >
                <TextBlock title="About IEEE Tunisia Section">
                    The section is a part of the Region 8, IEEE Tunisia Section aims to spread IEEE Activities to all corners of the country through educational and technical activities, networking opportunities, and to develop technology and its applications for humanitarian goals. The section supports chapters, special interest groups, student activities and student awards.
                    <div className='about-explore-btn'>
                        <a href='https://ieee.tn/'  target="_blank" rel="noreferrer" ><ThemedButton text='Explore' color='secondary' /></a>
                    </div>
                </TextBlock>
                <div className='videoContainer blockElement'>
                    <img className="deco top-disk" src={top_disk} />
                    <img className="deco bottom-disk" src={bot_disk} />

                    <div className="video">
                        <img className={"videoImage"} src={"images/ieee_logo.png"} alt="tunisia section" />
                    </div>
                </div>
            </TwoElementsBlock>

            <TwoElementsBlock direction='reverse'>
                <DecoratedImage img="images/ieee_members.png" />
                <TextBlock title="About IEEE INSAT Student Branch">
                    One of the largest IEEE communities in region 8, founded in 2013 at the institute of applied sciences and technologies and counting now more than 500 active members. Our student branch counts 6 technical chapters and one affinity group and has successfully organized more than 160 events (congresses, conferences, 24h challenges, workshops, competitions…) in various domains
                </TextBlock>

            </TwoElementsBlock>

            <AboutSYPSection />

            <PoweredBy />

            <Footer />
        </>
    );
}