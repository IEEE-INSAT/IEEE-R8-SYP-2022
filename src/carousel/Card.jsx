import React from 'react'
import Facebook from "./assets/FB.png"
import linkedin from "./assets/LinkedIN.png"
import whatsapp from "./assets/wapp.png"
import line from "./assets/Line1.png"
import './Card.css'
import PropTypes from 'prop-types';



const Card=(props) => {
    
    return(
        <div className="slider-card" >
                            
                            <div className="slider-card-image" style={{backgroundImage:`url(${props.imgURL})`}}>
                                <div className="slider-card-info">
                                    <section className="slider-card-social-media-section">
                                        <a href=""><img alt="facebook" className="slider-card-social-media" src={Facebook}></img></a>
                                        <a href=""><img alt="linkedin" className="slider-card-social-media" src={linkedin}></img></a>
                                        <a href=""><img alt="whatsapp" className="slider-card-social-media" src={whatsapp}></img></a>
                                    </section>
                                    <p className="slider-card-name">{props.name}</p>
                                    <section className="slider-card-line">
                                        <img alt="line" src={line}></img>
                                    </section>
                                    <p className="slider-card-position">{props.position}</p>
                                    
                                </div>
                            </div>  
                        </div>



    )
} 
Card.propTypes = {
    imgURL: PropTypes.any,
    name: PropTypes.any,
    position: PropTypes.any
};

export default Card;