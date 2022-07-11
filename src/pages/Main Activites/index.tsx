import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from 'react-reveal/Fade';
import MainActivities from '../../components/MainActivities';
export default function MainActivitiesPage() {
    return (
        <div className="registration">
            <Header title={'Main Activities'} description={<p>See what&#39;s in the menu</p>} />

            <MainActivities/>
            {window.matchMedia("all and (max-width: 768px)").matches?"": <Footer />}
        </div>
    );
}
