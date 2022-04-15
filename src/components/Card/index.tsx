import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Card.css'


interface CardProps{
    name: string;
    role: string;
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
}

export default function Card({ name, role, facebook, linkedin, whatsapp }: CardProps){

    return(
        <div className="slider-card" >

            <div className="slider-card-image" style={{backgroundImage:`url("/images/committee/${name}.jpg")`}} >
                <div className="slider-card-info">
                    <section className="slider-card-social-media-section">
                        <a href={facebook}><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faFacebookF} /></a>
                        <a href={linkedin}><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faLinkedin} /></a>
                        <a href={whatsapp}><FontAwesomeIcon className="slider-card-social-media" size="lg" color='#8A422D' icon={faWhatsapp} /></a>
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