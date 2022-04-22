import './style.css';
import React from 'react';
import aboutSYPContent from '../../data/AboutUs - SYP Section.json';

export default function AboutSYPSection({ }) {
    return (
        <div className='about-syp-section'>
            <div className='about-syp-section-title'>
                {aboutSYPContent.title}
            </div>
            <div className='about-syp-section-content'>
                {aboutSYPContent.content}
            </div>
            <div className='about-syp-section-picture'>
                <img src={aboutSYPContent.picture} />
            </div>
        </div>
    );
}
