import React from 'react'
import './Slider.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import Facebook from "./assets/FB.png"
import linkedin from "./assets/LinkedIN.png"
import whatsapp from "./assets/wapp.png"
import line from "./assets/Line1.png"

const CardSlider =(props) =>{
    const slides = [{name:'Khaldoun Taktak',position:'Congress Chairman',imageURL:'Khaldoun 1.png'},
    {name:'Khaldoun Taktak',position:'Congress Chairman',imageURL:'Khaldoun 1.png'},
    {name:'Khaldoun Taktak',position:'Congress Chairman',imageURL:'Khaldoun 1.png'},
    {name:'Khaldoun Taktak',position:'Congress Chairman',imageURL:'Khaldoun 1.png'},
    {name:'Khaldoun Taktak',position:'Congress Chairman',imageURL:'Khaldoun 1.png'},
];

    const slideLeft = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft -= 500;
    }
    const slideRight = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft += 500;
    }
    return(
        <div className="section">
            <BsFillArrowLeftCircleFill color='#8A422D' size={40} className="slider-icon left" onClick={slideLeft}/>
        <div id="main-slider-container">
            <div id ="slider">
            {
                slides.map((slide,index) =>{
                    return(
                        <div className="slider-card" key={index}>
                            
                            <div className="slider-card-image" style={{backgroundImage:`url(${slide.imageURL})`}}>
                                <div className="slider-card-info">
                                    <section className="slider-card-social-media-section">
                                        <a href=""><img alt="facebook" className="slider-card-social-media" src={Facebook}></img></a>
                                        <a href=""><img alt="linkedin" className="slider-card-social-media" src={linkedin}></img></a>
                                        <a href=""><img alt="whatsapp" className="slider-card-social-media" src={whatsapp}></img></a>
                                    </section>
                                    <p className="slider-card-name">{slide.name}</p>
                                    <section className="slider-card-line">
                                        <img alt="line" src={line}></img>
                                    </section>
                                    <p className="slider-card-position">{slide.position}</p>
                                    
                                </div>
                            </div>  
                        </div>
                    )

                })
            }
            </div>
        </div>
        <BsFillArrowRightCircleFill color='#8A422D' size={40} className="slider-icon right" onClick={slideRight}/>
            </div>
    )

}

export default CardSlider;