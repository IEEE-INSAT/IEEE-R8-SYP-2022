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

                <TwoElementsBlock>
                    <img className="tunLocation" src={tunLocation} />
                    <TextBlock title="From North Africa">
                        <div>
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                            Bla Bla Bla
                        </div>
                    </TextBlock>
                </TwoElementsBlock>

                <TwoElementsBlock>
                    <CurrencyConverter />
                    <CurrencyBills />
                </TwoElementsBlock>
            </div>
            <Footer />
        </>
    );
}