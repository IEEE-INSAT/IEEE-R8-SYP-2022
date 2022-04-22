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

export default function AboutUs() {
    return (
        <>
            <Fade>
                <Header title={"ABOUT US"} description="Know more about us" />
            </Fade>

            <TwoElementsBlock >
                <TextBlock title="About IEEE Tunisia Section">
                    The section is a part of the Region 8, IEEE Tunisia Section aims to spread IEEE Activities to all corners of the country through educational and technical activities, networking opportunities, and to develop technology and its applications for humanitarian goals. The section supports chapters, special interest groups, student activities and student awards.
                    <div className='about-explore-btn'>
                        <ThemedButton text='Explore' color='secondary' />
                    </div>
                </TextBlock>
                <VideoDisplay pictureOnly={true} img="images/ieee_logo.png" />
            </TwoElementsBlock>

            <TwoElementsBlock direction='reverse'>
                <DecoratedImage img="images/ieee_members.png" />
                <TextBlock title="About IEEE INSAT Student Branch">
                    One of the largest IEEE communities in region 8, founded in 2013 at the institute of applied sciences and technologies and counting now more than 500 active members. Our student branch counts 6 technical chapters and one affinity group and has successfully organized more than 160 events (congresses, conferences, 24h challenges, workshops, competitions…) in various domains
                </TextBlock>

            </TwoElementsBlock>

            <SliderSectionAboutUs />

            <AboutSYPSection />

            <PoweredBy />

            <Footer />
        </>
    );
}