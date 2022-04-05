import React from 'react'
import './Slider.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import Card from './Card'

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
                        <Card index={index} imgURL={slide.imageURL} name={slide.name} position={slide.position} key={index}/>
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