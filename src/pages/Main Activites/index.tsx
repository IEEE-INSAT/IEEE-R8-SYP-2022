import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
export default function MainActivities(){
    return(
        <div className="registration">
            <Header title={'Main Activities'} description={<p>See what&#39;s in the menu</p>}/>
            <div style={{marginBottom:100}}></div>
            <Footer/>
        </div>
    );
}