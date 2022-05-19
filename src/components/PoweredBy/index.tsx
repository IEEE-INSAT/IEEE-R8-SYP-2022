import './style.css';
import React from 'react';
import logos from '../../data/Powered-By-Logos.json';

export default function PoweredBy({ }) {
    return (
        <div className="testimonials-container powered-by-section">
            <h4>Contributors</h4>
            <h2>Powered by</h2>

            <div className='powered-by-logos'>
                <a href={logos[0]["website"]} className="powered-by-image-row">
                    <img src={logos[0]["imgUrl"]} alt="" />
                </a>
                <a href={logos[1]["website"]}  className="powered-by-image-row">
                    <img src={logos[1]["imgUrl"]} alt="" />
                </a>
                <a href={logos[2]["website"]} className="powered-by-image-row">
                    <img src={logos[2]["imgUrl"]} alt="" />
                </a>
                <a href={logos[3]["website"]} className="powered-by-image-row">
                    <img src={logos[3]["imgUrl"]} alt="" />
                </a>
            </div>
        </div>
    );
}
