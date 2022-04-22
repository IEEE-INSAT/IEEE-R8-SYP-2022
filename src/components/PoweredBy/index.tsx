import './style.css';
import React from 'react';
import logos from '../../data/Powered-By-Logos.json';

export default function PoweredBy({ }) {
    return (
        <div className="testimonials-container powered-by-section">
            <h4>Contributors</h4>
            <h2>Powered by</h2>

            <div className='powered-by-logos'>
                <div className="powered-by-col small-logo">
                    <img src={logos[0]} alt="" />
                </div>
                <div className="powered-by-col">
                    <img src={logos[1]} alt="" />
                </div>
                <div className="powered-by-col powered-by-row-container">
                    <div className="powered-by-image-row">
                        <img src={logos[2]} alt="" />
                    </div>
                    <div className="powered-by-image-row">
                        <img src={logos[3]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
