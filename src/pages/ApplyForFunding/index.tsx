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
                <Header title={"APPLY FOR FUNDING"} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla aliquet turpis. Pellentesque nec lacus ligula. Donec vitae dui vitae urna varius facilisis. Maecenas tincidunt semper ipsum. Vivamus vel ante sed magna pellentesque bibendum nec vel nibh. "/>
            </Fade>  
            <Footer/>
        </div>
    )
}