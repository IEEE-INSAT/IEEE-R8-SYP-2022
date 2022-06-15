import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Speakers from "../../components/Speakers";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

export default function SpeakersPage() {
    return (
        <div className="registration">
            <Header title={'SPEAKERS'} description={<p>Meet our speakers</p>}/>
            <Fade>
             <Speakers/>
            </Fade>
            <div style={{marginBottom:100}}></div>
            <Footer/>
        </div>
    );
}