import React from "react";
import CurrencyConverter from "../../components/CurrencyConverter";
import Header from "../../components/Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import TwoElementsBlock from "../../components/TwoElementsBlock";
import Footer from "../../components/Footer";
import CurrencyBills from "../../components/CurrencyBills";
import TextBlock from "../../components/TextBlock";
import tunLocation from './../../assets/images/loc-tunisia.png';
import './style.css';
import VideoDisplay from "../../components/VideoDisplay";
import CurvedWaveSection from "../../components/CurvedWaveSection";
import Gallery from "../../components/Gallery";

export default function About() {

    return (
        <>
            <Fade>
                <Header title={"ABOUT TUNISIA"} description="Know more about Tunisia" />
            </Fade>
            <div className="infoContainer">
                <TwoElementsBlock>
                    <TextBlock title="Tunisia - تونس">
                        There&apos;s so much to see and do in each region of Tunisia: a wide variety of landscapes,
                        a coastline spanning 1,250km, studded with islands and archipelagos, a fantastic array of
                        traditions and customs and a rich historical heritage. We are delighted to introduce you
                        to these regions by breaking them down into this video.
                    </TextBlock>
                    <VideoDisplay />
                </TwoElementsBlock>

                <TwoElementsBlock direction="reverse">
                    <img className="blockElement" src={tunLocation} />
                    <TextBlock title="From North Africa">
                        <>
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla
                        </>
                    </TextBlock>
                </TwoElementsBlock>

                <TwoElementsBlock>
                    <CurrencyConverter />
                    <div className="desktopBills">
                        <CurrencyBills />
                    </div>
                </TwoElementsBlock>
            </div>

            <CurvedWaveSection title="Headline" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />

            <Gallery
                title="Pictures from your next destination"
                description="Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline - Sub headline"
            />

            <Footer />
        </>
    );
}