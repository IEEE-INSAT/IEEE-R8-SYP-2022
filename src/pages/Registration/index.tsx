import React from 'react';
import './registration.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RegistrationCardsSection from '../../components/RegistrationCardsSection';

import RegistrationDescription from "../../components/RegistrationDescription";

export default function Registration() {
    return (
        <div className="registration">
            <Header title={'REGISTRATIONS'} description={<p>Registrations for the R8 SYP 2022 will soon be open.</p>}/>
            <RegistrationCardsSection/>
            <RegistrationDescription/>
            <Footer/>
        </div>
    );
}