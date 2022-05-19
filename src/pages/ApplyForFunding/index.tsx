import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function ApplyForFunding(){
    return (
        <div className="applyForFunding">
            <Header title={"APPLY FOR FUNDING"} description={<p>Thank you for your interest in IEEE SYP congress The registration fees will be <span style={{ color: "#000" }} >350$</span>.</p>} />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfz6Pmg4dJeODT3fyeKYLSLaA3rmELCYvX1PsSWrwajQ2vBvQ/viewform?embedded=true" width="100%" height="1387" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            <Footer/>
        </div>
    )
}