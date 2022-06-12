import React from "react";
import './registration.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Registration() {
    return(
    <div className="registration">
        <Header title={"REGISTRATIONS"} description="Registrations for the R8 SYP 2022 will soon be open"/>

        <Footer/>
    </div>
);
}