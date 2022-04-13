import React from 'react';
import './style.css'
import bgCurve from './../../assets/images/headline_bg.png';
import bgCurveSmall from './../../assets/images/headline_bg_small.png';

interface ICurvedWaveSection {
    title: string;
    content: string;
}

export default function CurvedWaveSection({ title, content }: ICurvedWaveSection) {
    return (
        <div className='curveContainer'>
            <div className='curveContent'>
                <div className='sectionTitle'>
                    {title}
                </div>
                <div className='sectionContent'>
                    {content}
                </div>
            </div>
            <img className='bgPicture desktop' src={bgCurve} />
            <img className='bgPicture mobile' src={bgCurveSmall} />

        </div>
    );
}