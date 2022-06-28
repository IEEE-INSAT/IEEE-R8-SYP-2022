import React from 'react';
import './registration.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RegistrationCardsSection from '../../components/RegistrationCardsSection';
import RegistrationDescription from "../../components/RegistrationDescription";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";


export default function Registration() {
    return (
        <div className="registration">
            <Header title={'REGISTRATION'} description={<p>Registrations for the Region 8 SYP 2022 will soon be open.</p>}/>
            <RegistrationCardsSection/>
            <Fade>
                <RegistrationDescription/>
            </Fade>
            <Footer/>
        </div>
    );
}