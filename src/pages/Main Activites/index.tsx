import React from 'react';
import ActivityPage from '../../components/ActivityPage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
export default function MainActivitiesPage(){
    return(
        <div className="registration">
            <Header title={'Main Activities'} description={<p>See what&#39;s in the menu</p>}/>
            <div style={{marginBottom:100}}></div>
            <ActivityPage 
                type={'Workshop'} 
                name={'Computer Vision'} 
                description={'Enim esse incididunt sint ex aute veniam aliquip dolore magna dolore. Et ut mollit nostrud exercitation eiusmod reprehenderit aliquip ipsum esse laboris qui dolor in. Et veniam consectetur laborum dolore velit sunt velit sit et enim nostrud laboris dolor. Eiusmod officia fugiat deserunt enim ea. Mollit velit laboris fugiat nulla officia duis tempor elit anim enim et non aute. Fugiat sunt nostrud et tempor duis incididunt deserunt. Esse laboris do do reprehenderit aute veniam fugiat.'} 
                date={'10/04/2020'} 
                time={'11:40'} 
                location={'A8'} 
                instructorName={'Ahmad Belkahla'} 
                instructorDesc={'Ahmed Belkahla is Studying Computer Science & Networks Engineering at the National Institute of Applied Science and Technology (INSAT) and is a Cyber Security Specialist at Yogosha. He occupied the position of vice chairman of Securinets and was the Media manager of IEEE CS INSAT Chapter in 2019.'} 
                instructorHighlight={'Cyber Security Specialist'} 
                linkedin={'https://www.linkedin.com/in/andrelukacakici/'}/>
            <Footer/>
        </div>
    );
}