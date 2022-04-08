import React from "react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function FAQ(){
    return (
        <div className="faq">
            <Fade>
                <Header title={"FAQs"} description="Find your answers here" />  
            </Fade>
            <Footer />
        </div>
    );
}