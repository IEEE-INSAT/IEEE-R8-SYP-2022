import React from "react";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function ApplyForFunding(){
    return (
        <div className="applyForFunding">
            <Fade>
                <Header title={"APPLY FOR FUNDING"} description={<p>The form will be available soon...</p>} />
            </Fade>  
            <Footer/>
        </div>
    )
}