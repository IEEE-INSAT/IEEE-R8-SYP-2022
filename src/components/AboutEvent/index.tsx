import React from 'react';
import './AboutEvent.css';
import syp_congress from '../../assets/images/syp_congress.png';
import ThemedButton from '../ThemedButton';
import { Link } from 'react-router-dom';


function AboutEvent() {
    return (
        <div className="about">
            
            <div className="text">
                <h5>About the event</h5>
                <h1>What is the<br /> IEEE R8 SYP?</h1>
                <p>
                    The IEEE R8 Student and Young Professional Congress is the largest event in all Region 8. 
                    It occurs every two years and gathers both students and young professionals members from all Sections in this Region.
                    SYP&apos;s main goal is to enhance and foster the engineering sense and capabilities through different activities both technically and culturally.
                    It also provides an opportunity to network.
                </p>
                <Link to="/about" ><ThemedButton text='Explore' onClick={() => window.scrollTo(0, 0)} color="secondary" /></Link>
            </div>
            <div className="pictures">
                <div className="gradient parent">
                    <img className='image child' src={syp_congress} alt="SYP congress atendance" />   
                </div>
                
            </div>
            
        </div>
    );
}

export default AboutEvent;
