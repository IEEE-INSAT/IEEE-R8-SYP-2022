import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';
import TechnicalActivities from '../../components/TechnicalActivities';

export default function MainActivitiesPage() {
    return (
        <div className="registration">
            <Header title={'Technical Activities'} description={<p>See what&#39;s in the menu</p>}/>

            <TechnicalActivities/>
            {window.matchMedia("all and (max-width: 768px)").matches ? "" : <Footer/>}
        </div>
    );
}
