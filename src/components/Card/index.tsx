import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Card.css'


interface CardProps{
    imgURL?: string;
    name: string;
    role: string;
}

export default function Card({ imgURL, name, role }: CardProps){

    return(
        <div className="slider-card" >

            <div className="slider-card-image" style={{}/*{backgroundImage:`url("../../assets/images/committee/Khaldoun.png")`}*/}>
                <div className="slider-card-info">
                    <section className="slider-card-social-media-section">
                        <a href=""><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faLinkedin} /></a>
                        <a href=""><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faWhatsapp} /></a>
                    </section>
                    <p className="slider-card-name">{name}</p>
                    <section className="slider-card-line">
                        <svg height="4" width="200">
                            <line x1="0" y1="0" x2="200" y2="0" style={{stroke:"#8A422D", strokeWidth:3 }} />
                        </svg>
                    </section>
                    <p className="slider-card-position">{role}</p>

                </div>
            </div>  
        </div>



    )
} 